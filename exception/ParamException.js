import Exception from "./Exception";

export default class ParamException extends Exception {
  constructor(err) {
    super(err)
    this.status = 404
    this.error = 1000
    this.message = err.message || '参数错误'
  }
}