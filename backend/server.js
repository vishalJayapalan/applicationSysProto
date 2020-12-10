const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(express.json())
app.use(cors())

const port = process.env.PORT || 5000
const uri = process.env.DATABASE_URI

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})

const stageRoute = require('./stages/router')
const userRoute = require('./user/router')

app.use('/user', userRoute)
app.use('/stage', stageRoute)

mongoose.connection
  .once('open', () => {
    console.log('MongoDB connection established succesfully...')
  })
  .on('error', error => {
    console.log('Connection Error:', error)
  })

app.listen(port, () => console.log(`Listening on port ${port}`))
