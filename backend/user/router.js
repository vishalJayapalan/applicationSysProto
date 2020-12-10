const express = require('express')

const Router = express.Router()

const userController = require('./controller.js')

Router.get('/', userController.getUser)
Router.post('/', userController.createUser)
Router.put('/', userController.updateUser)
Router.delete('/', userController.deleteUser)

module.exports = Router
