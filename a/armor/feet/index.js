var fs = require('fs');

var feet = fs.readFileSync(__dirname + '/feet.txt', 'ascii');

module.exports = feet.split('\n');