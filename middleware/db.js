import mongoose from 'mongoose'
import config  from '../config'

export default (ctx, next) => {
  mongoose.connect(config.db, { useNewUrlParser: true })
  next()
}