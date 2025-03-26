const input = require('fs').readFileSync(0).toString().trim().split("\n");

var x = Number(input[0]);
var y = Number(input[1]);

if(x > 0 && y > 0){
	console.log(1)
}else if(x < 0 && y > 0){
	console.log(2)
}else if(x < 0 && y < 0){
	console.log(3)
}else if(x > 0 && y <0 ){
	console.log(4)
}