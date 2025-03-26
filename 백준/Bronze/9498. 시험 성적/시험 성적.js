
var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim()

var A = parseInt(input);

if(A > 89 && A < 101){
	console.log('A')
}else if(A > 79 && A < 90){
	console.log('B')
}else if(A > 69 && A < 80){
	console.log('C')
}else if(A > 59 && A < 70){
	console.log('D')
}else {
	console.log('F')
}