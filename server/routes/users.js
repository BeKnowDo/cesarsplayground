const fs = require('fs')
const express = require('express')
const myPaths = require('../../config/paths')
// const log = console.log

// Dummy data for routes
const usersData = `${myPaths.fakeData}/users.json`

// Initialize our express router
const router = express.Router()

// Now declare our routes
router.get('/users', (req, res) => {
  let users = JSON.parse(fs.readFileSync(usersData, 'utf-8'))

  // Do any filtering
  let queries = {}
  queries = Object.assign(queries, req.query)
  Object.keys(queries).forEach((key, index) => {
    users = users.filter(item => {
      let name = item[key].toString()
      // log(name)
      return (name.includes(queries[key]))
    })
  })

  res.json(users)
})

module.exports = router
