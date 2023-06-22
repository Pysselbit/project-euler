
const MAX = 12000;

const LEFT = 1 / 3;
const RIGHT = 1 / 2;

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

var rangeCount = 0;

// Check values of d up to MAX:
for (var d = 1; d <= MAX; d++) {
	// Check values of n resulting in a fraction within range:
	for (var n = Math.ceil(d * LEFT); n / d < RIGHT; n++) {
		if (n == 1 && d == 3)
			continue;

		// Check if HCF of n and d is 1:
		var isHCF1 = true;
		for (var prime of primes) {
			if (d % prime == 0 && n % prime == 0) {
				isHCF1 = false;
				break;
			}
		}

		if (isHCF1)
			rangeCount++;
	}
}

console.log(rangeCount);