var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');

var i = 0

while(i < input.length){
	var [A, B] = input[i].split(' ').map((num) => +num)
	
	if( !A || !B ) break
	
	console.log(A+B)
	
	i++
}