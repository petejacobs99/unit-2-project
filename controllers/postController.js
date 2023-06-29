const Post = require('../models/post')
const jwt = require('jsonwebtoken')

exports.createPost = async (req, res) => {
    try {
        const post = new Post(req.body)
        await post.save()
        const token = await post.generateAuthToken()
        res.status(200).json({post, token})
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

exports.indexAll = async (req, res) => {
    try {
        const posts = await Post.find()
        res.json(posts)
    } catch (error) {
        res.status(400).json({message: error.message})  
    }
}

exports.indexOne = async (req, res) => {
    try {
        const post = await Post.find({ _id: req.params.id})
        res.json(post)
    } catch (error) {
        res.status(400).json({message: error.message})   
    }
}

exports.updatePost = async (req, res) => {
    try {
        const post = await Post.findOneAndUpdate({ _id: req.params.id }, req.body, {new: true})
        res.json(post)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

exports.deletePost = async (req, res) => {
    try {
        const post = await Post.findOneAndDelete({ _id: req.params.id})
        res.sendStatus(204)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}