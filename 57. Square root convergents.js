
const N = 1000;

var sum = 0;

for (var n = 0; n < N; n++) {
	var numerator = 1n;
	var denominator = 2n;

	for (var i = 0; i < n; i++) {
		numerator += 2n * denominator;

		var temp = numerator;
		numerator = denominator;
		denominator = temp;
	}

	numerator += denominator;

	if (("" + numerator).length > ("" + denominator).length)
		sum++;
}

console.log(sum);