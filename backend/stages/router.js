const express = require('express')

const Router = express.Router()

const stageController = require('./controller.js')

Router.get('/', stageController.getStages)

Router.get('/:id', stageController.getStage)

Router.delete('/:id', stageController.deleteStage)
Router.put('/:id', stageController.updateStage)
Router.post('/', stageController.createStage)

module.exports = Router
