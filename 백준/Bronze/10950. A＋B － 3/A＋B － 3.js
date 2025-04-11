var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');

var inputLength = parseInt(input[0])

for(let i = 0; i < inputLength; i++){
	var nums = input[i + 1].split(' ')
	
	var A = parseInt(nums[0])
	var B = parseInt(nums[1])
	
	console.log(A + B)
}