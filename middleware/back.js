export default (ctx, next) => {
  ctx.back = (param = {}) => {
    ctx.body = {
      data: param.data ? param.data : {},
      errorNo: param.errorNo ? param.errorNo : 0,
      errorMsg: param.errorMsg ? param.errorMsg : 'no error'
    }
  }
  // 初始化back默认值
  ctx.back()
  next()
}