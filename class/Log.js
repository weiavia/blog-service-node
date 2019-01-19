import config from '../config/log'
import log4js from 'log4js'

class Log {
  constructor() {
    this.Instance = log4js.configure(config)
    this.fatalLog = this.Instance.getLogger('系统崩溃')
    this.infoLog = this.Instance.getLogger('systemInfo')
  }

  fatal(message) {
    this.fatalLog.fatal(message)
  }

  info(message) {
    this.infoLog.info(message)
  }

  exit(cb) {
    this.Instance.shutdown(() => {
      cb && cb()
    })
  }
}

let log = new Log()
export default log