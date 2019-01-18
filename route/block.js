import BlockModel from '../model/block'
import ParamException from '../exception/ParamException'
let blockMoel = new BlockModel()

export default (router) => {
  router.post('/block', async (ctx) => {
    await blockMoel.saveOne(ctx.request.body)
  })

  router.get('/block', (ctx) => {
    throw new ParamException({ctx})
  })
}