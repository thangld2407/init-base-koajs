const { hashPassword } = require('../helper/_bcrypt');
const { token, refreshToken, verifyRefreshToken } = require('../utils/jwt');
const TOKEN_MODEL = require('../model/TokenModel');
module.exports = {
	loginByEmail: async ctx => {
		const { email, password } = ctx.request.body;

		const user = {
			email,
			password: hashPassword(password)
		};

		let access_token = token(user);
		let refresh_token = refreshToken(user);

		TOKEN_MODEL.create({
			token: refresh_token
		});

		ctx.body = {
			access_token,
			refresh_token,
			user
		};
	},

	getNewToken: async ctx => {
		const { refresh_token } = ctx.request.body;
		if (refresh_token) {
			const hasToken = await TOKEN_MODEL.findOne({ token: refresh_token });

			if (hasToken) {
				const decodeRefreshToken = verifyRefreshToken(hasToken.token);
				if (decodeRefreshToken) {
					const { email, password } = decodeRefreshToken;
					const user = {
						email,
						password
					};
					const access_token = token(user);
					const new_refresh_token = refreshToken(user);
					TOKEN_MODEL.create({
						token: new_refresh_token
					});
					ctx.body = {
						message: 'Get new token successfully',
						access_token,
						refresh_token: new_refresh_token
					};
				} else {
					ctx.body = {
						message: 'Invalid refresh token',
						error_code: 401
					};
				}
			} else {
				ctx.body = {
					message: 'Invalid refresh token',
					error_code: 401
				};
			}
		} else {
			ctx.body = {
				message: 'refresh_token is required',
				error_code: 401
			};
		}
	}
};
