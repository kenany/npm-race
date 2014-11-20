var fs = require('fs');

var weaponNames = fs.readFileSync(__dirname + '/names.txt', 'ascii');

module.exports = weaponNames.split('\n');