import Model from './schema/blockSchema'
import CommonModel from './Model'

export default class Block extends CommonModel {
  constructor() {
    super(Model)
  }

  async saveOne(data) {
    return await this.Model.create(data)
  }
}