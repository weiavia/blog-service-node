import koa from 'koa'
import config from './config'
import useRouteMiddleware from './route'
import backMiddleware from './middleware/back'
import dbMiddleware from './middleware/db'
import corsMiddleware from './middleware/cors'
import bodyParser from 'koa-bodyparser'
import Exception from './exception/Exception'

const app = new koa()
const exception = new Exception()

app.use(() => {})
app.use(bodyParser())
app.use(corsMiddleware)
app.use(backMiddleware)
app.use(dbMiddleware)
useRouteMiddleware(app)

app.listen(config.port, () => {
  console.log(`http://127.0.0.1:${config.port}`)
})

console.log(1)