
var numbers = [];

for (var a = 2; a <= 100; a++) {
	for (var b = 2; b <= 100; b++)
		numbers.push(Math.pow(a, b));
}

numbers.sort();

var unique = 0;

for (var i = 0; i < numbers.length; i++) {
	if (i == 0 || numbers[i - 1] != numbers[i])
		unique++;
}

console.log(unique);