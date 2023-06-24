const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const { model, Schema } = require('mongoose')

const postSchema = new mongoose.Schema({
  title: { type: String, required: true},
  body: String,
  user: { type: Schema.Types.ObjectID, required: true, ref: 'User' }
})


postSchema.methods.generateAuthToken = async function() {
  const token = jwt.sign({ _id: this._id }, 'secret')
  return token
}

const Post = mongoose.model('Post', postSchema)

module.exports = Post