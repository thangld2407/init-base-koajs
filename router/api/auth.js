const KoaRouter = require('@koa/router');
const router = new KoaRouter();
const { loginByEmail, getNewToken } = require('../../controller/AuthController');

router.post('/login', loginByEmail);
router.post('/relogin', getNewToken);

module.exports = router.routes();
