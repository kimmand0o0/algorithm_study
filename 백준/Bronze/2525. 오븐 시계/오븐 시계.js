var input = require('fs').readFileSync(0).toString().trim().split("\n");

var now = input[0].split(" ")

var h = Number(now[0]);
var m = Number(now[1]);
var timer = Number(input[1])

var allTime = h * 60 + m + timer
var afterH = Math.floor( allTime/60 )
var afterM = allTime%60

if(afterH > 23) {
	afterH = afterH - 24
}

console.log(`${afterH} ${afterM}`)