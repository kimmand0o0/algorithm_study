var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');

var nums = input.map((num) => +num)

var max = Math.max(...nums)
var index = nums.findIndex((num) => num === max)

console.log(max)
console.log(index + 1)