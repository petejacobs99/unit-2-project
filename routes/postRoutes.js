const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const postController = require('../controllers/postController')

router.post('/create', userController.auth, postController.createPost)
router.put('/:id', userController.auth, postController.updatePost)
router.delete('/:id', userController.auth, postController.deletePost)
router.get('/all', userController.auth, postController.indexAll)
router.get('/:id', userController.auth, postController.indexOne)

module.exports = router