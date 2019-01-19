import koa from 'koa'
import useRouteMiddleware from './route'
import backMiddleware from './middleware/back'
import dbMiddleware from './middleware/db'
import corsMiddleware from './middleware/cors'
import bodyParser from 'koa-bodyparser'
import ExceptionHandler from './class/Exception'
import Server from './class/Server'

const app = new koa()
new ExceptionHandler()

app.use(bodyParser())
app.use(corsMiddleware)
app.use(backMiddleware)
app.use(dbMiddleware)
useRouteMiddleware(app)

new Server(app)