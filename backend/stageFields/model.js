const mongoose = require('mongoose')
const Schema = mongoose.Schema

const StageFieldsSchema = new Schema(
  {
    fieldName: { type: String, required: true },
    fieldType: { type: String, required: true },
    options: [{ type: String }],
    required: { type: Boolean, default: false }
  },
  { strict: false }
)

module.exports = StageFieldsSchema
