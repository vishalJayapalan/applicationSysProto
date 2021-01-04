const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CompletedStageSchema = new Schema(
  {
    stageName: { type: String, required: true }
  },
  { strict: false }
)

// const CompletedStages = mongoose.model('Stage', StageSchema)

// module.exports = mongoose.model('Stage', StageSchema)
module.exports = CompletedStageSchema
