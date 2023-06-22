
const MAX = 1000000;

// Find primes up to MAX:
var primes = [2];
for (var i = 3; i <= MAX; i++) {
	var isPrime = true;

	for (var prime of primes) {
		if (i % prime == 0) {
			isPrime = false;
			break;
		}
	}

	if (isPrime)
		primes.push(i);
}

var reducedProperFractionCount = 0;

// Check values of d up to MAX:
for (var d = 1; d <= MAX; d++) {
	// Find all prime divisors of d:
	var primeDivisors = [];
	for (var i = 0; primes[i] < d; i++) {
		if (d % primes[i] == 0)
			primeDivisors.push(primes[i]);
	}

	// Start at maximum number of fractions:
	var fractionCount = d - 1;

	// Check values of n up to d - 1 for common divisors:
	if (primeDivisors.length > 0) {
		for (var n = 1; n < d; n++) {
			for (var divisor of primeDivisors) {
				if (divisor > n)
					break;

				// If common divisor is found, subtract fraction:
				if (n % divisor == 0) {
					fractionCount--;
					break;
				}
			}
		}
	}

	reducedProperFractionCount += fractionCount;
}

console.log(reducedProperFractionCount);