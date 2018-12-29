import Router from 'koa-router'
import fs from 'fs'

let router = new Router()

router.prefix('/api/v1')

// 遍历route目录下的所有.js文件，传入router对象挂载路由
fs.readdirSync(__dirname)
.filter(file => ~file.search(/^[^\.].*js$/))
.forEach(file => {
  if(file == 'index.js')
    return
  let route = require(__dirname + '/' + file)
  route.default(router)
})

export default (app) => {
  app.use(router.routes())
  app.use(router.allowedMethods())
}