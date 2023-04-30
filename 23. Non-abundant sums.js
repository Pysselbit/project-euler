
var sum = 0;

for (var i = 0; i <= 28123; i++) {
	if (!isSumOfTwoAbundantNumbers(i))
		sum += i;
}

console.log(sum);

function isSumOfTwoAbundantNumbers(n) {
	for (var i = 1; i < n; i++) {
		if (isAbundant(i) && isAbundant(n - i))
			return true;
	}

	return false;
}

function isAbundant(n) {
	var sumOfDivisors = 0;

	for (var i = 1; i <= n / 2; i++) {
		if (n % i == 0)
			sumOfDivisors += i;
	}

	return sumOfDivisors > n;
}