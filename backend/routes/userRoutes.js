const express = require('express')
const {getUserById} = require('../services/userService')
const router = express.Router()

router.get('/:id', async (req, res) => {
  try {
    const user = await getUserById(req.params.id)
    res.json(user)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
})

module.exports = router
