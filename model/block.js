import Model from '../schema/blockSchema'
import Common from './common'

export default class Block extends Common {
  constructor() {
    super(Model)
  }

  saveOne(data) {
    this.Model.create(data)
  }
}