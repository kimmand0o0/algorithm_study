var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString();

var num = parseInt(input)
var repit = input/4

var result = ''

for(let i = 0; i < repit; i++) {
	if(i > 0) result += ' '
	
	result += 'long'
}

console.log(`${result} int`)