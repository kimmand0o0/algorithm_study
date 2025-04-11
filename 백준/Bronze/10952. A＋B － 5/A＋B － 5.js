var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');

for(let i = 0; i < input.length; i++){
	var [A, B] = input[i].split(' ').map((num) => +num)
	
	if(A === 0 && B === 0) break
	
	console.log(A+B)
}