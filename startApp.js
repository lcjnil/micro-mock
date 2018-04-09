const Koa = require('koa');
const Router = require('koa-router');
const isPlainObject = require('lodash/isPlainObject');

const METHODS = ['GET', 'POST', 'DELETE', 'PUT'];


module.exports = function startApp(config, port) {
    const app = new Koa();
    const router = new Router();

    Object.keys(config).forEach(route => {
        let [method, path] = route.split(' ');
        if (!path) {
            path = method;
            method = 'GET';
        }

        method = method.toLowerCase()

        router[method](path, ctx => {
            if (typeof config[route] === 'function') {
                config[route](ctx);
                return;
            }
            ctx.body = config[route];
        })
    });

    app.use((ctx, next) => {
        console.log(ctx.method, ctx.path);
        next();
    })
    app.use(router.allowedMethods()).use(router.routes());

    console.log(`Mock listening at ${port}`);
    app.listen(port);
}