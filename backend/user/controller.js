const User = require('./model')
const { Stages } = require('../stages/model')

const getUser = async (req, res) => {
  try {
    const stages = await Stages.find()
    const user = await User.find()
    let index = 0
    for (let i = 0; i < stages.length; i++) {
      if (stages[i].stageName === user[0].currentStage.stageName) {
        break
      }
      index++
    }

    return res.status(200).json({
      user: user[0],
      totalStages: stages.length,
      currentStageIndex: index + 1
    })
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
    return res
      .status(500)
      .json({ message: 'There was an error. Please try again later' })
  }
}

const updateUser = async (req, res) => {
  try {
    const { currentStageName } = req.body

    const user = await User.findOne({ userName: 'Admin User' })
    const stages = await Stages.find()
    let index = 0
    for (let i = 0; i < stages.length; i++) {
      if (stages[i].stageName === user.currentStage.stageName) {
        break
      }
      index++
    }
    if (currentStageName === user.currentStage.stageName) {
      for (const [key, value] of Object.entries(req.body)) {
        if (key !== currentStageName) user.currentStage[key] = value
      }
      user.finishedStages.push(user.currentStage)
      user.currentStage = stages[++index]
      await user.save()
      return res.status(200).json({
        user,
        totalStages: stages.length,
        currentStageIndex: index + 1
      })
    } else {
      return res.status(400).json({ Msg: 'User Not autherized to change this' })
    }
  } catch (err) {
    console.log(err)
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
