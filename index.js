const Koa = require('koa')
const convert = require('koa-convert')
const logger = require('./middleware/logger-generator')

const app = new Koa()

app.use(convert(logger()))

app.use( async (ctx) =>{
    ctx.body = 'hello koa2'
})

app
.listen(3000)