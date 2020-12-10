const mongoose = require('mongoose')
const Schema = mongoose.Schema

const StageSchema = new Schema(
  {
    stageName: { type: String, required: true }
  },
  { strict: false }
)

module.exports = mongoose.model('Stage', StageSchema)
