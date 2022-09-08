const KoaRouter = require('@koa/router');
const router = new KoaRouter();
const { loginByEmail, getNewToken } = require('../../controller/auth');

router.post('/login', loginByEmail);
router.post('/relogin', getNewToken);

module.exports = router.routes();
