export default (ctx, next) => {
  ctx.set("Access-Control-Allow-Origin", "*");
  ctx.set("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
  ctx.set("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  next()
}