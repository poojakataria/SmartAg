let dbContext = require('./DBContext');

let User = () => { }

User.createUser = (name, email, password, salt, userType, callback) => {
	dbContext.query(`INSERT INTO User(fullName,email,password,salt,userType) VALUES ('${name}','${email}','${password}','${salt}','${userType}')`, (err, resp) => {
		callback(err, resp);
	})
}

User.checkExistingAccount = (email, callback) => {
	dbContext.query(`SELECT 1 FROM User WHERE email=?`, [email], (err, result) => {
		callback(err, result);
	})
}

User.getLogin = (email, callback) => {
	dbContext.query(`SELECT ID, fullName, password, salt, userType FROM User WHERE email = ?`, [email], (err, result) => {
		callback(err, result);
	})
}

module.exports = User;