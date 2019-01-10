export default class Exception {
  constructor() {
    process.on('unhandledRejection', this.rejection)
    process.on('uncaughtException', this.exception)
  }

  setCtx() {
    
  }

  // un catch promise reject
  rejection (err) {
    
  }

  // un catch exception
  exception (err) {

  }
}