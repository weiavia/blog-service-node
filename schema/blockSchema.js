import mongoose from 'mongoose'

const Schema  = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxlength: 16,
    minlength: 2
  },
  described: {
    type: String,
    maxlength: 30,
  },
  type: Number,
  imgs: [String],
  updated: { type: Date, default: Date.now },
  created: { type: Date },
  thumb: String,
  like: Number,
  look: Number,
  comment_num: Number,
  comments: [
    {
      user: String,
      created: Date,
      like: Number,
      text: String
    }
  ]
})

export default mongoose.model('block', Schema)