#!/usr/bin/env node
var greet = require('../index.js');
var result = greet((process.argv).slice(2));
console.log(result);
