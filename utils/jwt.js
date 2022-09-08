const jwt = require('jsonwebtoken');
const { jwt_conf } = require('../config');
module.exports = {
	token: payload => {
		return jwt.sign(payload, jwt_conf.secret, { expiresIn: jwt_conf.tokenLife });
	},
	refreshToken: payload => {
		return jwt.sign(payload, jwt_conf.refreshTokenSecret, {
			expiresIn: jwt_conf.refreshTokenLife
		});
	},
	verifyToken: token => {
		return jwt.verify(token, jwt_conf.secret);
	},
	verifyRefreshToken: token => {
		return jwt.verify(token, jwt_conf.refreshTokenSecret);
	}
};
