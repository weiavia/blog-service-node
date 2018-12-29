import BlockModel from '../model/block'
const Model = new BlockModel()

export default (router) => {
  router.post('/block', (ctx, next) => {
    
    ctx.back({name: 'wei'})
  })
}