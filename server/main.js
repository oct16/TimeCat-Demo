const Koa = require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const logger = require('koa-logger')
const cors = require('@koa/cors')

const app = new Koa()
const port = 5000
const router = new Router()

let records = []

router.post('/records', (ctx, next) => {
    const data = ctx.request.body
    records = records.concat(data)
    ctx.status = 204
})

router.get('/records', (ctx, next) => {
    ctx.body = records
})

router.delete('/records', (ctx, next) => {
    records.length = 0
    ctx.status = 204
})

app.use(cors())
app.use(bodyParser())
app.use(router.routes()).use(router.allowedMethods())
app.use(logger())

app.listen(port)
console.log('server is running at prot: http://localhost:' + port)
