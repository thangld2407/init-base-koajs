const KoaRouter = require('@koa/router');
const router = new KoaRouter();

router.get('/user', ctx => {
	ctx.body = {
		name: 'jhajajj',
		age: '30',
		ahhaa: 'ahahhaah'
	};
});

module.exports = router.routes();
