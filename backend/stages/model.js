const mongoose = require('mongoose')
const Schema = mongoose.Schema

const StageSchema = new Schema(
  {
    stageName: { type: String, required: true }
  },
  { strict: false }
)

const Stages = mongoose.model('Stage', StageSchema)

// module.exports = mongoose.model('Stage', StageSchema)
module.exports = {
  Stages,
  StageSchema
}
