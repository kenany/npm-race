var fs = require('fs');

var suffixes = fs.readFileSync(__dirname + '/suffixes.txt', 'ascii');

module.exports = suffixes.split('\n');