
var count = 0;

for (var i = 1; i < 1000000; i++) {
	if (countNonRepeatingTerms(i) == 60)
		count++;
}

console.log(count);

function countNonRepeatingTerms(n) {
	var terms = [n];

	while (true) {
		n = digitFactorialSum(n);

		if (terms.includes(n))
			return terms.length;

		terms.push(n);
	}
}

function digitFactorialSum(n) {
	n += "";

	var sum = 0;

	for (var i = 0; i < n.length; i++)
		sum += factorial(Number(n[i]));

	return sum;
}

function factorial(n) {
	var f = 1;

	for (var i = n; i >= 2; i--)
		f *= i;

	return f;
}