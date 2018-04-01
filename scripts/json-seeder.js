const destination = require('../config/paths').fakeData
const fs = require('fs')
const faker = require('faker')
const args = require('yargs').argv
const log = console.log

const usersCount = args.users || 1
let users = []

// Create a user object until we reach our userCount argument
for (let currentIndex = 0; currentIndex < usersCount; currentIndex++) {
  let firstname = faker.name.firstName()
  let lastname = faker.name.lastName()
  let salary = Math.floor(Math.random() * (300000 - 24000 + 1)) + 24000
  let employment = faker.random.boolean()
  let ssn = Math.floor(Math.random() * (999999999 - 111111111 + 1)) + 111111111

  let address = {
    primary: {
      street: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.stateAbbr(),
      zipcode: faker.address.zipCode()
    },
    mailing: {
      street: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.stateAbbr(),
      zipcode: faker.address.zipCode()
    }
  }

  let user = {
    firstname,
    lastname,
    ssn,
    address,
    salary,
    employment
  }
  users.push(user)
}
users = JSON.stringify(users)

// Write file to folder
if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination)
}
fs.writeFileSync(`${destination}/users.json`, users)
