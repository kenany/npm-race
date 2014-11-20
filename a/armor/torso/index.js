var fs = require('fs');

var torsos = fs.readFileSync(__dirname + '/torsos.txt', 'ascii');

module.exports = torsos.split('\n');