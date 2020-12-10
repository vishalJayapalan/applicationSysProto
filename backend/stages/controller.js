const { Stages } = require('./model')

const getStages = async (req, res) => {
  try {
    const stages = await Stages.find()
    return res.status(200).json({ stages })
  } catch (err) {
    return res
      .status(500)
      .json({ message: 'There was an error. Please try again later' })
  }
}

const getStage = async (req, res) => {
  try {
    const stages = await Stages.findById(req.params.id)
    return res.status(200).json({ stages })
  } catch (err) {
    return res
      .status(500)
      .json({ message: 'There was an error. Please try again later' })
  }
}

const createStage = async (req, res) => {
  try {
    const object = {}
    for (const [key, value] of Object.entries(req.body)) {
      object[key] = value
    }

    const stage = new Stages(object)
    await stage.save()
    res.status(201).json({ stageid: stage._id })
  } catch (err) {
    return res
      .status(500)
      .json({ message: 'There was an error. Please try again later' })
  }
}

const updateStage = async (req, res) => {
  try {
    const stage = await Stages.findById(req.params.id)
    for (const [key, value] of Object.entries(req.body)) {
      stage[key] = value
    }
    await stage.save()
    return res.status(200).json({ msg: 'updated' })
    // stage[req.body.name] = req.body.value
  } catch (err) {
    return res
      .status(500)
      .json({ message: 'There was an error. Please try again later' })
  }
}

const deleteStage = async (req, res) => {
  try {
    const stage = await Stages.findById(req.params.id)
    await Stages.findByIdAndDelete(req.params.id)
    return res.status(200).json({ msg: 'Deleted Stage' })
  } catch (err) {
    return res
      .status(500)
      .json({ message: 'There was an error. Please try again later' })
  }
}

module.exports = {
  deleteStage,
  updateStage,
  createStage,
  getStages,
  getStage
}
