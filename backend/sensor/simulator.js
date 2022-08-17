let mongo = require('./DBContext');

let speed = (random) => {
	let data = {
		"sensorID": "VEL120719000130",
		"serviceID": 3,
		"edgeStationID": 1,
		"time": Date.now(),
		"value": {
			"speed": 35 + (random * 5)
		}
	};
	mongo.connect().then(mongoClient => {
		mongoClient.db('sensordata').collection('sensor').insertOne(data, (err, res) => {
			console.log(res.result.ok);
			mongoClient.close();
		})
	})
}

let temperature = (random) => {
	let data = {
		"sensorID": "TEM120719000131",
		"serviceID": 4,
		"edgeStationID": 1,
		"time": Date.now(),
		"value": {
			"temperature": 85 + (random * 5)
		}
	};
	mongo.connect().then(mongoClient => {
		mongoClient.db('sensordata').collection('sensor').insertOne(data, (err, res) => {
			console.log(res.result.ok);
			mongoClient.close();
		})
	})
}

exports.start = () => {
	setInterval(() => {
		console.log(123);
		let random = Math.random().toPrecision(2);
		speed(random);
		temperature(random);
	}, 1000);
}