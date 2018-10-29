import koaRouter from 'koa-router'
import path from 'path'
import fs from 'fs'
// import request from 'superagent'
const router = koaRouter()


export default app => {
    router.get('/', async (ctx, next) => {})

    app.use(router.routes()).use(router.allowedMethods())
}

