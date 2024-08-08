const {register, login} = require('../services/authService')
const {generateToken} = require('../utils/jwt')

const registerUser = async (req, res) => {
  try {
    const {username, password} = req.body
    const user = await register(username, password)
    const token = generateToken(user)
    res.json({user, token})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

const loginUser = async (req, res) => {
  try {
    const {username, password} = req.body
    const {user, token} = await login(username, password)
    res.json({user, token})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

module.exports = {registerUser, loginUser}
