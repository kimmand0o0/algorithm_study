var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');

var nums = input[1].split(' ').map((num) => +num).sort((a,b) => a - b)

console.log(`${nums[0]} ${nums[nums.length - 1]}`)