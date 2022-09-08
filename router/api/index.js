const KoaRouter = require('@koa/router');
const router = new KoaRouter();

router.use('/auth', require('./auth'));

module.exports = router.routes();
