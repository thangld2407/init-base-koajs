const KoaRouter = require('@koa/router');

const router = new KoaRouter();

router.get('/', async ctx => {
	await ctx.render('./pages/main');
});

router.use('/api', require('./api'));

module.exports = router.routes();
