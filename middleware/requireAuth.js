const { verifyToken } = require('../utils/jwt');

module.exports = (ctx, next) => {
	const { authorization } = ctx.request.header;
	if (!authorization) {
		ctx.status = 401;
		ctx.body = {
			message: 'Unauthorized',
			error_code: 401
		};
		return;
	}
	const token = authorization.replace('Bearer ', '');
	if (token) {
		const user = verifyToken(token);
		ctx.state.user = user;
		return next();
	}
};
