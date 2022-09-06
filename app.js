require('dotenv').config();
const path = require('path');
const Koa = require('koa');
const http = require('http');
const koaBody = require('koa-bodyparser');
const render = require('koa-ejs');
const mainRouter = require('./router');

const app = new Koa();

// bodyparser is used
app.use(koaBody());

// error handler
const errorHandler = require('./helper/errorHandle');

app.use(errorHandler);

render(app, {
	root: path.join(__dirname, 'views'),
	layout: 'layout',
	viewExt: 'ejs',
	cache: false,
	debug: false
});

// Router middleware routes all requests to the mainRouter
app.use(mainRouter);

const server = http.createServer(app.callback());

const PORT = process.env.PORT || 4000;

const { connectToDB } = require('./database');

connectToDB()
	.then(_ => {
		server.listen(PORT, () => {
			console.log(`Server listening on port ${PORT}`);
		});
	})
	.catch(err => {
		console.log(err);
	});
