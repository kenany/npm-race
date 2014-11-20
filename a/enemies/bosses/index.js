var fs = require('fs');

var bosses = fs.readFileSync(__dirname + '/bosses.txt', 'ascii');

module.exports = bosses.split('\n');