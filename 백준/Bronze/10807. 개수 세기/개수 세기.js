var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');

var answer = 0
var value = Number(input[2])

var nums = input[1].split(' ').map((num) => {
	if(+num === value) answer ++
})

console.log(answer)