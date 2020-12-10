const User = require('./model')

const getUser = async (req, res) => {
  try {
    const stages = await Stages.find()
    return res.status(200).json({ stages })
  } catch (err) {
    return res
      .status(500)
      .json({ message: 'There was an error. Please try again later' })
  }
}

module.exports = {
  getUser
}
