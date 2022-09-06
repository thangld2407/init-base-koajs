require('dotenv').config();
const Koa = require('koa');
const http = require('http');
const koaBody = require('koa-bodyparser');
const mainRouter = require('./router');

const app = new Koa();

// bodyparser is used
app.use(koaBody());

// Router middleware routes all requests to the mainRouter
app.use(mainRouter);

const server = http.createServer(app.callback());

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});
