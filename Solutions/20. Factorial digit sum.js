
const N = 100n;

var factorial = 1n;

for (var i = N; i > 0n; i--)
	factorial *= i;

var string = "" + factorial;

var sum = 0;

for (var i = 0; i < string.length; i++)
	sum += Number(string.substring(i, i + 1));

console.log(sum)