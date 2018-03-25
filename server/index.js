require('dotenv').load()
const chalk = require('chalk')
const express = require('express')

const errorNotification = chalk.bgYellow.red
const logNotification = chalk.bgKeyword('white').keyword('red')
const env = process.env
const log = console.log

// Bring in routes
const users = require('./routes/users')

// Initialize our express server
const app = express()

// Catch errors
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

// Declare our routes
app.use('/api', users)

// Let's listen on the imported PORT env variable
log(logNotification(`Let's get this party started...`))
app.listen(env.PROXY_PORT, () => console.log(`Server's started on port ${env.PROXY_PORT}`))

// Open a browser instance for convenience
// opn(`${env.LOCAL_HOST}:${env.PROXY_PORT}`, { app: 'google chrome' })
