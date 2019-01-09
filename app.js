import koa from 'koa'
import config from './config'
import useRouteMiddleware from './route'
import backMiddleware from './middleware/back'
import dbMiddleware from './middleware/db'
import corsMiddleware from './middleware/cors'
import errorMiddleware from './middleware/error'
import bodyParser from 'koa-bodyparser'

const app = new koa()

app.use(bodyParser())
app.use(errorMiddleware)
app.use(corsMiddleware)
app.use(backMiddleware)
app.use(dbMiddleware)
useRouteMiddleware(app)

app.listen(config.port, () => {
  console.log(`http://127.0.0.1:${config.port}`)
})