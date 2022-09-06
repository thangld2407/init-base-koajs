const KoaRouter = require('@koa/router');
const router = new KoaRouter();

router.get('/user', (ctx) => {
  ctx.body = {
    name: 'John Doe',
    age: '30',
    ahhaa: 'ahahhaah',
  };
});

module.exports = router.routes();
