const app = require('express')();
const cors = require('cors');
const bodyParser = require('body-parser');
const constants = require('./utilities/constants');
const auth = require('./utilities/auth-guard');
const user = require('./DataAccessLayer/User');
var mongo = require('./sensor/DBContext');
let simulator = require('./sensor/simulator');
let Service = require('./DataAccessLayer/Service');

app.use(bodyParser.json());

app.use(cors({ origin: constants.clientUrl, credentials: true }));

app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', constants.clientUrl);
	res.setHeader('Access-Control-Allow-Credentials', 'true');
	res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
	res.setHeader('Cache-Control', 'no-cache');
	next();
});

app.post('/signup', (req, res) => {
	if (req.body.email && req.body.password && req.body.name && req.body.userType) {
		user.checkExistingAccount(req.body.email, (existingUserError, existingUserResp) => {
			if (existingUserError) {
				res.send({
					error: existingUserError
				});
			} else if (existingUserResp.length > 0) {
				res.send({
					error: 'User Exists'
				});
			} else {
				const salt = auth.getSalt();
				let hashResult = auth.hashPassword(req.body.password, salt);
				user.createUser(req.body.name, req.body.email, hashResult.hash, salt, req.body.userType, (createUserError, createUserResponse) => {
					if (createUserError) {
						res.send({
							error: createUserError
						});
					} else {
						let token = auth.signJWT(createUserResponse.insertId, req.body.email, req.body.userType);
						res.status(200).send({
							token: token
						});
					}
				})
			}
		})
	} else {
		res.send({
			error: 'Insufficient Data'
		});
	}
})

app.post('/login', (req, res) => {
	if (req.body.email && req.body.password) {
		user.getLogin(req.body.email, (loginError, loginResponse) => {
			if (loginError) {
				res.send({
					error: loginError
				});
			} else if (loginResponse.length === 0) {
				res.send({
					error: 'User Not Found'
				});
			} else {
				let hashResult = auth.hashPassword(req.body.password, loginResponse[0].salt);
				if (hashResult.hash === loginResponse[0].password) {
					let token = auth.signJWT(loginResponse[0].ID, req.body.email, loginResponse[0].userType);
					res.status(200).send({
						token: token
					});
				} else {
					res.send({
						error: 'Incorrect Password'
					});
				}
			}
		})
	} else {
		res.send({
			error: 'Insufficient Data'
		});
	}
})

app.post('/sensordata', (req, res) => {
	let data = {
		sensorID: req.body.sensorID,
		serviceID: req.body.serviceID,
		edgeStation: req.body.edgeStationID,
		timestamp: Math.floor(Date.now() / 1000),
		data: req.body.value
	}
	// console.log(data);
	mongo.connect().then(mongoClient => {
		mongoClient.db('sensordata').collection('sensor').insertOne(data, (err, res) => {
			console.log(res.result.ok);
		})
	})

	// mongo.connect('mongodb+srv://dbuser:oNKU4VCM@cluster0-x8pz0.mongodb.net/sensordata?retryWrites=true&w=majority', (err,db) => {
	//     db.db('sensordata').collection('sensor').insertOne(data,(err,res) => {
	//         console.log(res.result.ok);
	//     })
	// });
	res.send({ data: req.body });
})

simulator.start();

// app.use((req, res, next) => {
// 	auth.checkLogin(req.query.token, data => {
// 		if (data.error) {
// 			res.redirect('/');
// 		} else {
// 			next();
// 		}
// 	})
// })

app.get('/mymachines', (req, res) => {
	if (req.query.token) {
		auth.checkLogin(req.query.token, data => {
			if (data.error) {
				res.send({
					error: 'Invalid Token'
				});
			} else {
				Service.getMachinesForUser(data.userid, (err, resp) => {
					if (err) {
						res.send({
							error: 'Error processing request'
						});
					} else {
						res.send(resp);
					}
				})
			}
		})
	} else {
		res.send({
			error: 'No Token Sent'
		});
	}
});

app.get('/getallmachines', (req, res) => {
	Service.getMachines((err, resp) => {
		if (err) {
			res.send({
				error: 'Error processing request'
			});
		} else {
			res.send(resp);
		}
	});
});

app.post('/newservicerequest', (req, res) => {
	if (req.query.token) {
		auth.checkLogin(req.query.token, data => {
			if (data.error) {
				res.send({
					error: 'Invalid Token'
				});
			} else {
				Service.addNewRequest(req.body.machineid, data.userid, req.body.ranch, req.body.startdate, req.body.enddate, req.body.amount, req.body.paidamount, req.body.crowteam, (err, resp) => {
					if (err) {
						res.send({
							error: 'Error processing request'
						});
					} else {
						res.send({
							id: resp.insertId
						});
					}
				})
			}
		})
	} else {
		res.send({
			error: 'No Token Sent'
		});
	}
})

app.post('/updateservicerequest', (req, res) => {
	if (req.query.token) {
		auth.checkLogin(req.query.token, data => {
			if (data.error) {
				res.send({
					error: 'Invalid Token'
				});
			} else {
				Service.updateRequest(req.body.requestid, req.body.machineid, req.body.userid, req.body.ranch, req.body.startdate, req.body.enddate, req.body.amount, req.body.paidamount, req.body.crowteam, req.body.status, (err, resp) => {
					if (err) {
						res.send({
							error: 'Error processing request'
						});
					} else {
						res.send({
							updated: true
						});
					}
				})
			}
		})
	} else {
		res.send({
			error: 'No Token Sent'
		});
	}
})

app.delete('/deleteservicerequest', (req, res) => {
	if (req.query.token) {
		auth.checkLogin(req.query.token, data => {
			if (data.error) {
				res.send({
					error: 'Invalid Token'
				});
			} else {
				Service.deleteRequest(req.query.requestid, (err, resp) => {
					if (err) {
						res.send({
							error: 'Error processing request'
						});
					} else {
						res.send({
							id: resp
						});
					}
				})
			}
		})
	} else {
		res.send({
			error: 'No Token Sent'
		});
	}
});

app.get('/dues', (req, res) => {
	if (req.query.token) {
		auth.checkLogin(req.query.token, data => {
			if (data.error) {
				res.send({
					error: 'Invalid Token'
				});
			} else {
				Service.getDuesForUser(req.query.userid, (err, resp) => {
					if (err) {
						res.send({
							error: 'Error processing request'
						});
					} else {
						if (resp.length) {
							let dues = resp.reduce((p, v) => {
								return p + v;
							}, 0);
							res.send({
								dues: dues
							});
						} else {
							res.send({
								id: resp
							});
						}
					}
				})
			}
		})
	} else {
		res.send({
			error: 'No Token Sent'
		});
	}
})

if (module === require.main) {
	const server = app.listen(process.env.PORT || 3001, () => {
		const port = server.address().port;
		console.log(`App listening on port ${port}`);
	});
}

module.exports = app;