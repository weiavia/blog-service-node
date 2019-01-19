// 初始化返回体 
// 如果路由中没有重写ctx.body 默认status:404 message:not found
// 为ctx挂载 back方法

export default (ctx, next) => {
  ctx.status = 404
  ctx.body = {
    error: '404',
    message: 'not found'
  }

  ctx.back = (param) => {
    let body  = {
      error: param.error ? param.error : '200',
      message: param.message ? param.message : 'success'
    }

    if(param.data) {
      body.data = param.data
    }
    ctx.body = body

    if(param.status) {
      ctx.status = param.status
    } else {
      ctx.status = 200
    }
  }

  next()
}