const fs = require('fs')
const express = require('express')
const myPaths = require('../../config/paths')

// Dummy data for routes
const usersData = `${myPaths.fakeData}/users.json`

// Initialize our express router
const router = express.Router()

// Now declare our routes
router.get('/users', (req, res) => {
  const users = JSON.parse(
    fs.readFileSync(usersData, 'utf-8')
  )
  res.json(users)
})

module.exports = router
