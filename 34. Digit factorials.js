
var sum = 0;

for (var i = 10; i < 100000000; i++) {
	var digits = ("" + i).split("");

	var sumOfFactorials = 0;
	for (var digit of digits)
		sumOfFactorials += factorial(Number(digit));

	if (sumOfFactorials == i)
		sum += sumOfFactorials;
}

console.log(sum);

function factorial(n) {
	var f = 1;

	for (var i = 2; i <= n; i++)
		f *= i;

	return f;
}