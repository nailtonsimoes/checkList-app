const { Router } = require('express')

const userController = require('./app/Controllers/UserController')

const routes = new Router()

routes.post('/user', userController.index)
routes.get('/user', userController.show)

module.exports = routes
