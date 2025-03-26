var input = require('fs').readFileSync(0).toString().trim().split(" ");
var arr = input.map((value) => Number(value)).sort((a, b) => b - a);

var [A, B, C] = arr

var isTriple = A === B && B === C
var isDouble = A === B || B === C || A === C

if(isTriple){
	console.log(10000 + A * 1000)
}else if(isDouble){
	if(B === C){
		console.log(1000 + B * 100)
	}else{
		console.log(1000 + A * 100)
	}
}else {
	console.log(A * 100)
}