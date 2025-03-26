var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim()

var A = parseInt(input);

if(A%4 === 0 && (A%100 !== 0 || A%400 === 0)){
	console.log(1)
}else {
	console.log(0)
}