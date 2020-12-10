const User = require('./model')
const { Stages } = require('../stages/model')
const { findOne, findById } = require('./model')
const { STATES } = require('mongoose')

const getUser = async (req, res) => {
  try {
    const user = await User.find()
    return res.status(200).json({ user: user[0] })
  } catch (err) {
    return res
      .status(500)
      .json({ message: 'There was an error. Please try again later' })
  }
}

const createUser = async (req, res) => {
  try {
    const stages = await Stages.find()
    const { userName } = req.body
    const user = new User({
      userName,
      currentStage: stages[0],
      finishedstage: []
    })
    await user.save()
    return res.status(201).json({ userId: user._id })
  } catch (err) {
    console.log(err)
    return res
      .status(500)
      .json({ message: 'There was an error. Please try again later' })
  }
}

const updateUser = async (req, res) => {
  try {
    const user = await User.findOne({ userName: 'Admin User' })
    const stages = await Stages.find()
    // console.log(user)
    for (const [key, value] of Object.entries(req.body)) {
      // console.log('STAGES', stages)
      // console.log(Object.keys(user.currentStage))
      // console.log(Object.keys(stages).includes(key))
      if (Object.keys(user.currentStage).includes(key)) {
        // console.log('inhere')
        // console.log(key, value)
      }
      // user[key] = value
    }
    res.status(200)
  } catch (err) {
    return res
      .status(500)
      .json({ message: 'There was an error. Please try again later' })
  }
}

const deleteUser = async (req, res) => {
  try {
    await User.findOneAndDelete({ userName: 'Admin User' })
    res.status(200).json({ Msg: 'deleted' })
  } catch (err) {
    return res
      .status(500)
      .json({ message: 'There was an error. Please try again later' })
  }
}

module.exports = {
  getUser,
  createUser,
  deleteUser,
  updateUser
}
