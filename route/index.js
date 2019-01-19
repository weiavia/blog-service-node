import compose from 'koa-compose'
import fs from 'fs'

var fileStr = fs.readdirSync(__dirname).filter((file) => {
  return ~file.search(/^[^\.].*js$/)
})

var routers = []

fileStr.forEach(file => {
  if(file == 'index.js') {
    return
  } else {
    let route = require(__dirname + '/' + file)
    routers.push(route.default.routes())
    routers.push(route.default.allowedMethods())
  }
})

export default (app) => {
  app.use(compose(routers))
}