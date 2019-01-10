import BlockModel from '../model/block'
const blockMoel = new BlockModel()

export default (router) => {
  router.post('/block', async (ctx) => {
    await blockMoel.saveOne(ctx.request.body)
    console.log('fast')
  })

  router.get('/block', (ctx) => {
    throw new Error('block')
  })
}