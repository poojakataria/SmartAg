let dbContext = require('./DBContext');

let Service = () => { };

Service.getServicesForUser = (user, callback) => {
	dbContext.query(`SELECT * FROM ServiceRequest WHERE requestType = 'Install' AND user = ?`, [user])
}

Service.getMachines = (callback) => {
	dbContext.query('SELECT md.machineid, md.MachineName, md.EdgeStation, md.Price, md.Status FROM MachineDetails md', (err, res) => {
		callback(err, res);
	})
}

Service.getMachinesForUser = (user, callback) => {
	dbContext.query(`SELECT md.machineid, md.MachineName, md.EdgeStation, md.Price, md.Status FROM ServiceRequest sr INNER JOIN MachineDetails md ON sr.machineid=md.machineid WHERE sr.user = ?`, [user], (err, res) => {
		callback(err, res);
	})
}

Service.addNewRequest = (machineid, user, ranch, startdate, enddate, amount, paindamount, crowteam, callback) => {
	dbContext.query(`INSERT INTO servicerequest (machineId, user, ranch, startDate, endDate, Amount, PaidAmount, crowTeam, status) VALUES (${machineid},${user},${ranch},${startdate},${enddate},${amount},${paindamount},${crowteam},'Pending')`, (err, res) => {
		callback(err, res);
	})
}

Service.updateRequest = (requestid, machineid, user, ranch, startdate, enddate, amount, paindamount, crowteam, status, callback) => {
	dbContext.query(`UPDATE servicerequest SET machineId = ?, user = ?, ranch = ?, startDate = ?, endDate = ?, Amount = ?, PaidAmount = ?, crowTeam = ?, status = ? WHERE id = ?`, [machineid, user, ranch, startdate, enddate, amount, paindamount, crowteam, status, requestid], (err, res) => {
		callback(err, res);
	})
}

Service.deleteRequest = (requestid, callback) => {
	dbContext.query(`DELETE FROM servicerequest WHERE id = ?`, [requestid], (err, res) => {
		callback(err, res);
	});
}

Service.getDuesForUser = (user, callback) => {
	dbContext.query(`SELECT PaidAmount-Amount AS 'Dues' FROM servicerequest WHERE user = ?`, [user], (err, res) => {
		callback(err, res);
	})
}

module.exports = Service;