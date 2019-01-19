export default {
  appenders: {
    out: { type: 'stdout'},
    file: {
      type: 'dateFile',
      filename: 'logs/system-fatal.log',
      pattern: '.yyyy-MM-dd-hh'
    }
  },
  categories: {
    default: {
      appenders: [ 'file', 'out' ], level: 'debug'
    },
    systemInfo: {
      appenders: ['out' ], level: 'info'
    }
  }
}