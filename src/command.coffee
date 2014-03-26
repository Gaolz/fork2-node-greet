module.exports = command = ->
  greet = require("./index")
  argv = require('minimist')(process.argv.slice(2))
  params = process.argv[2]
  console.log greet("Gaolz", argv.drunk)
