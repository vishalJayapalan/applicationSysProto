const mongoose = require('mongoose')
const Schema = mongoose.Schema

const { StageSchema } = require('../stages/model')
const CompletedStageSchema = require('../completedStageField.js/model')

const UserSchema = new Schema({
  userName: { type: String, required: true },
  currentStage: StageSchema,
  finishedStages: [CompletedStageSchema],
  isCompleted: { type: Boolean, default: false }
})

module.exports = mongoose.model('User', UserSchema)
