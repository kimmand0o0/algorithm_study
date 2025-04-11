var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');

var value = Number(input[0].split(' ')[1])

var answer = ''

input[1].split(' ').map((num) => {
	if(+num < value) answer += `${num} `
})

console.log(answer.trim())