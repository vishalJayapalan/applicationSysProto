const express = require('express')

const Router = express.Router()

const userController = require('./controller.js')

Router.get('/', userController.getUser)

module.exports = Router
