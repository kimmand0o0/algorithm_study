
var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');

var caseLength = parseInt(input[0])

for(let i = 0; i < caseLength; i++){
	var [A, B] = input[i + 1].split(' ').map((item) => +item);
	
	console.log(`Case #${i+1}: ${A} + ${B} = ${A+B}`)
}