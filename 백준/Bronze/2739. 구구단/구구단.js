var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');

var a = parseInt(input[0]);

for(let i = 1 ; i < 10 ; i++) {
	console.log(`${a} * ${i} = ${a*i}`)
}