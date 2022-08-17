var constants = require('./constants');
var jwt = require('jsonwebtoken');
let crypto = require('crypto');
var dbContext = require('../DataAccessLayer/DBContext');

const Auth = () => {}

Auth.checkLogin = (token,callback) => {
    jwt.verify(token, constants.jwtSecret,(err,data) =>{
        if(err){
            callback({error: err});
        }else{
            callback({
                email: data.email,
                userid:data.user,
                userType: data.userType
            });
        }
    });
}

Auth.hashPassword = (password, salt) => {
    let hash1 = crypto.createHash('sha512');
    let hash2 = crypto.createHash('sha512');
    hash1.update(password);
    hash2.update(hash1.digest('hex') + salt);
    return {hash: hash2.digest('hex'), salt: salt};
}

Auth.getSalt = () => {
    let salt = '';
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 10; i++)
        salt += possible.charAt(Math.floor(Math.random() * possible.length));

    return salt;
}

Auth.signJWT = (userID, email, userType) => {
    return jwt.sign({user: userID, email: email, userType: userType},constants.jwtSecret,{expiresIn: 60*60, issuer: 'SmartCloud'});
}

module.exports = Auth;