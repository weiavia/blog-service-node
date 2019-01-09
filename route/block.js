import BlockModel from '../model/block'
const blockMoel = new BlockModel()

export default (router) => {
  router.post('/block', (ctx) => {
    blockMoel.saveOne(ctx.request.body)
  })

  router.get('/block', (ctx) => {
    throw new Error('block')
  })
}