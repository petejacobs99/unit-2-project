const request = require('supertest')
const mongoose = require('mongoose')
const { MongoMemoryServer } = require('mongodb-memory-server')
const app  = require('../app')
const server = app.listen(8081, () => console.log('Testing on PORT 8080'))
const User = require('../models/user')
const Post = require('../models/post')
let mongoServer

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create()
  await mongoose.connect(mongoServer.getUri(), { useNewUrlParser: true, useUnifiedTopology: true })

})

afterAll(async () => {
    await mongoose.connection.close()
    mongoServer.stop()
    server.close()
  })

describe('Test the blog post endpoints', () => {
    let token;

    beforeAll(async () => {
        const user = new User({
            name: 'Peter Test Jacobs',
            email: 'testing@gmail.com',
            password: 'notPassword'
        })
        await user.save()

        const response = await request(app)
        .post('/users/login')
        .send({name: 'Peter Test Jacobs', email: 'testing@gmail.com', password: 'notPassword'})

        token = response.body.token
    })


    test('It should create a new blog post', async () => {
        const response = await request(app)
        .post('/posts/create')
        .set('Authorization', `Bearer ${token}`)
        .send({ title: 'This is a test post', body: "this test post was created with supertest", user: "649708603e95e9a47cbf4186"})

        expect(response.statusCode).toBe(200)
        expect(response.body.post.title).toEqual('This is a test post')
        expect(response.body.post.body).toEqual("this test post was created with supertest")
        expect(response.body.post.user).toEqual('649708603e95e9a47cbf4186')
        expect(response.body).toHaveProperty('token')
    })

    test('It should update a blog post', async () => {
        const post = new Post({title: 'This is a test post', body: "this test post was created with supertest", user: "649708603e95e9a47cbf4186"})
        await post.save()
        const response = await request(app)
        .put(`/posts/${post._id}`)
        .set('Authorization', `Bearer ${token}`)
        .send({ title: 'UPDATES', body: "THIS IS AN UPDATED BODY", user: "649708603e95e9a47cbf4186"})

        expect(response.statusCode).toBe(200)
        expect(response.body.title).toEqual('UPDATES')
        expect(response.body.body).toEqual('THIS IS AN UPDATED BODY')
        expect(response.body._id).toEqual(`${post._id}`)
    })

    test('It should delete a blog post', async () => {
        const post = new Post({title: 'This is a test post', body: "this test post was created with supertest", user: "649708603e95e9a47cbf4186"})
        await post.save()
        const response = await request(app)
        .delete(`/posts/${post._id}`)
        .set('Authorization', `Bearer ${token}`)
        
        expect(response.statusCode).toBe(204)
    })
})

