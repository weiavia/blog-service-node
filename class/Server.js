import config from '../config'
import Log from '../class/Log'

export default class Server {
  constructor(app) {
    app.listen(config.port, () => {
      Log.info(`http://127.0.0.1:${config.port}`)
    })
  }
}