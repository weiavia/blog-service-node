export default (ctx, next) => {

  // process.on('uncaughtException', (err) => {
  //   console.log(err.message)
  // })
  
  // process.on('unhandledRejection', (err) => {
  //   console.log(1)
  //   console.log(err.message)
  // })

  next()
}