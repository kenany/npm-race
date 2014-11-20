var fs = require('fs');

var hands = fs.readFileSync(__dirname + '/hands.txt', 'ascii');

module.exports = hands.split('\n');