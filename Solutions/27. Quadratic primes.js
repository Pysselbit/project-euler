
var primes = [2];

var maxPrimes = 0;
var maxAB = 0;

for (var a = -999; a <= 999; a++) {
	for (var b = -1000; b <= 1000; b++) {
		var n = 0;

		while (isPrime(n * n + a * n + b))
			n++;

		if (n > maxPrimes) {
			maxPrimes = n;
			maxAB = a * b;
		}
	}
}

console.log(maxAB);

function isPrime(n) {
	// Find primes up to and beyond n:
	if (n > primes[primes.length - 1]) {
		for (var i = primes[primes.length - 1] + 1; primes[primes.length - 1] < n; i++) {
			var isPrime = true;

			for (var j = 0; j < primes.length; j++) {
				if (i % primes[j] == 0) {
					isPrime = false;
					break;
				}
			}

			if (isPrime)
				primes.push(i);
		}
	}

	// Check if prime:
	for (var i = 0; i < primes.length; i++) {
		if (n == primes[i])
			return true;
	}

	return false;
}