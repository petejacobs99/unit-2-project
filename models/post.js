const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const { model, Schema } = require('mongoose')

const postSchema = new mongoose.Schema({
  title: { type: String, required: true},
  body: String,
  user: { type: Schema.Types.ObjectID, required: true, ref: 'User' }
})



const Post = mongoose.model('Post', postSchema)

module.exports = Post