export default (ctx, next) => {
  ctx.back = (data = {}, error_msg = '', error_no = 0) => {
    ctx.body = {
      data,
      error_no,
      error_msg
    }
  }
  next()
}