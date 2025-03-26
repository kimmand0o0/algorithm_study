const input = require('fs').readFileSync(0).toString().trim().split(" ");

var h = Number(input[0]);
var m = Number(input[1]);

var dif = 45

var newM = m-45

if(newM >= 0){
	console.log(`${h} ${newM}`)
}else if(h > 0){
	console.log(`${h-1} ${60 + newM}`)
}else{
	console.log(`${23} ${60 + newM}`)
}