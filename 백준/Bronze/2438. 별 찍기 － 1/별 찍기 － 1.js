var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString();

var caseLength = parseInt(input)

for(let i = 1; i < caseLength + 1; i++){
	var stars = ''
	
	for(let j = 0; j < i; j++){
		stars += '*'
	}
	
	console.log(stars)
}