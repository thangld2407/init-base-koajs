const KoaRouter = require('@koa/router');

const router = new KoaRouter();

router.use('/api', require('./api'));

module.exports = router.routes();
