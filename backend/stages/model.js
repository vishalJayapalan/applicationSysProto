const mongoose = require('mongoose')
const Schema = mongoose.Schema

const StageFieldsSchema = require('../stageFields/model')

const StageSchema = new Schema(
  {
    stageName: { type: String, required: true },
    fields: [StageFieldsSchema]
  },
  { strict: false }
)

const Stages = mongoose.model('Stage', StageSchema)

// module.exports = mongoose.model('Stage', StageSchema)
module.exports = {
  Stages,
  StageSchema
}

// {
//   "stageName": "Second Stage",
//   "fields":[{"fieldName": "Gender",
//       "fieldType": "select",
//       "options": ["Male","Female","Transgender","Gender Neutral"],
//       "required": true}]
//   }

// {
//   "stageName": "First Stage",
//   "fields":[{"fieldName": "Full Name",
//       "fieldType": "input",
//       "required": true},
//       {"fieldName":"Country",
//       "fieldType":"input",
//       "required":true},
//       {"fieldName":"Phone Number",
//       "fieldType":"input"}]
//   }

// {
//   "stageName": "Third Stage",
//   "fields":[{"fieldName": "Profile Image",
//       "fieldType": "image",
//       "required": true},
//       {"fieldName":"Profile Name",
//       "fieldType":"input",
//       "required":true},
//       {"fieldName":"Email",
//       "fieldType":"input"}]
//   }
