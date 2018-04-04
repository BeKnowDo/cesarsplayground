const fs = require('fs')
const express = require('express')
const myPaths = require('../../config/paths')
const log = console.log

// Dummy data for routes
const usersData = `${myPaths.fakeData}/users.json`

// Initialize our express router
const router = express.Router()

// Now declare our routes
router.get('/users', (req, res) => {
  let users = JSON.parse(fs.readFileSync(usersData, 'utf-8'))

  // Create query object
  let queries = {}
  queries = Object.assign(queries, req.query)

  // Iterate through query parameters and filter dataset
  Object.keys(queries).forEach((key, index) => {
    users = users.filter(item => {
      let name = item[key] ? item[key].toString().toLowerCase() : 'null'
      let value = queries[key].toLowerCase()
      // log({
      //   queryValue: value,
      //   name: name
      // })
      return (name.includes(value))
    })
  })

  if (users.length <= 0) {
    users = {
      error: 'Empty Results'
    }
  }

  // log(users.length)
  res.json(users)
})

module.exports = router
