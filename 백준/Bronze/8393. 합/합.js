var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString();

var n = parseInt(input)

var result = 0

for(let i = 1; i < n + 1 ; i++){
	result += i
}

console.log(result)