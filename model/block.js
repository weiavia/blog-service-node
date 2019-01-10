import Model from '../schema/blockSchema'
import Common from './common'

export default class Block extends Common {
  constructor() {
    super(Model)
  }

  async saveOne(data) {
    return await this.Model.create(data)
  }
}