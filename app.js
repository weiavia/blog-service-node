import koa from 'koa'
import config from './config'
import useRouteMiddleware from './route'
import backMiddleware from './middleware/back'
import dbMiddleware from './middleware/db'

const app = new koa()

app.use(backMiddleware)
app.use(dbMiddleware)
useRouteMiddleware(app)

app.listen(config.port, () => {
  console.log(`http://127.0.0.1:${config.port}`)
})