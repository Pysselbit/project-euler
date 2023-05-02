
const N = 1000n;

var sum = 0n;

for (var i = 1n; i <= N; i++) {
	var number = 1n;

	for (var j = 0; j < i; j++)
		number *= i;

	sum += number;
}

var s = "" + sum;

console.log(s.substring(s.length - 10, s.length));