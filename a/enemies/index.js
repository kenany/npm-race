var fs = require('fs');

var enemies = fs.readFileSync(__dirname + '/enemies.txt', 'ascii');

module.exports = enemies.split('\n');