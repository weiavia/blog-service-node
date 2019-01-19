import Router from 'koa-router'
import BlockController from '../controller/Block'

var router = new Router()
router.prefix('/api/v1')

router.get('/block', (ctx) => {
  var blockController = new BlockController(ctx)
  blockController.getOne()
})

export default router