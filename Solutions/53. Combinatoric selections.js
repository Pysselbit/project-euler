
var count = 0;

for (var n = 1n; n <= 100n; n++) {
	for (var r = 1n; r <= n; r++) {
		if (factorial(n) / (factorial(r) * factorial(n - r)) > 1000000n)
			count++;
	}
}

console.log(count);

function factorial(n) {
	var f = 1n;

	for (var i = n; i > 0; i--)
		f *= i;

	return f;
}