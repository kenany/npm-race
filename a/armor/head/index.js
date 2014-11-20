var fs = require('fs');

var heads = fs.readFileSync(__dirname + '/heads.txt', 'ascii');

module.exports = heads.split('\n');