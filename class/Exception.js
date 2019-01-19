import CustomException from '../exception/Exception'
import Log from '../class/Log'

export default class Exception {
  constructor() {
    process.on('unhandledRejection', this.handler)
    process.on('uncaughtException', this.handler)
  }

  handler(err) {
    let ctx = err.ctx
    // 如果是自定义错误，重写上下文状态码
    if(err instanceof CustomException) {
      ctx.status = err.status
      ctx.body = {
        message: err.message,
        error: err.error
      }
    } else {
    // 记录日志，打印调用栈，给管理员发送一封email， 退出进程
      Log.fatal(err.message + ' ' + err.stack)
      Log.exit(() => {
        process.exit(1)
      })
    }
  }
}