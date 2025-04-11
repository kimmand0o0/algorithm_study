var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');

var inputLength = parseInt(input[0])

var answer = ''

for(let i = 0; i < inputLength; i++){
	var [A, B] = input[i + 1].split(' ').map((item) => +item);
	
	answer += A + B + "\n";
}

console.log(answer);