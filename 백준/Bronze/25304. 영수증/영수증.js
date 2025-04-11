var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');

var totalPrice = parseInt(input[0])
var totalLength = parseInt(input[1])

var comparPrice = 0

for(let i = 0; i < totalLength; i++){
	var nums = input[i + 2].split(' ')
	
	var price = parseInt(nums[0])
	var count = parseInt(nums[1])
	
	comparPrice += price * count
}

console.log(comparPrice === totalPrice ? 'Yes' : 'No')