var mysql = require('mysql');

// let conn = mysql.createPool({
// 	connectionLimit: 1000,
// 	host: "smart-sensor.cinrl1fsy5qc.us-west-1.rds.amazonaws.com",
//     user: "admin",
//     password: "oNKU4VCM",
// 	database: "smartDB"
// });

let conn = mysql.createPool({
	connectionLimit: 1000,
	host: "localhost",
    user: "root",
	database: "sensordb"
});

module.exports = conn;