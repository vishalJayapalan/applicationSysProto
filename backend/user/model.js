const mongoose = require('mongoose')
const Schema = mongoose.Schema

const { StageSchema } = require('../stages/model')

const UserSchema = new Schema({
  userName: { type: String, required: true },
  currentStage: StageSchema,
  finishedStages: [StageSchema]
})

module.exports = mongoose.model('User', UserSchema)
