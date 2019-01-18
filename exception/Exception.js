export default class Error {
  // status 状态码
  // ctx http请求上下文
  // error 自定义状态码
  constructor(err) {
    this.ctx = err.ctx
    this.error = 1000
    this.message = 'has error'
  }
}