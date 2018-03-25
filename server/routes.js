const express = require('express')

// Initialize our express router
const router = express.Router()

// Now declare our routes
router.get('/', (req, res) => {
  res.send('Index or landing page')
})

module.exports = router
