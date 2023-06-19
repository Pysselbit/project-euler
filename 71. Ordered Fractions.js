
const MAX = 1000000;
const F = 3 / 7;

var adjacentF = 0;
var adjacentN = 0;

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

// Check values of d up to MAX:
for (var d = 1; d <= MAX; d++) {
	// Check values of n resulting in a fraction between current best and F:
	for (var n = Math.floor(d * F); n / d < F; n++) {
		var f = n / d;

		// Check if fraction is between current best and F:
		if (f >= F || f <= adjacentF)
			continue;

		// Check if HCF of n and d is 1:
		var isHCF1 = true;
		for (var prime of primes) {
			if (d % prime == 0 && n % prime == 0) {
				isHCF1 = false;
				break;
			}
		}

		// Update current best:
		if (isHCF1) {
			adjacentF = f;
			adjacentN = n;
		}
	}
}

console.log(adjacentN);