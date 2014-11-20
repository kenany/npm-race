var fs = require('fs');

var prefixes = fs.readFileSync(__dirname + '/prefixes.txt', 'ascii');

module.exports = prefixes.split('\n');