let mongo = require('mongodb').MongoClient;
let connection;

exports.connect = () => {
	connection = mongo.connect('mongodb+srv://dbuser:oNKU4VCM@cluster0-x8pz0.mongodb.net/sensordata?retryWrites=true&w=majority');
	return connection;
}

exports.disconnect = () => {
	if (connection)
		connection.close();
}