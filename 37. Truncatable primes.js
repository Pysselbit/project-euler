
var primes = [2];
var truncatablePrimes = [];

for (var i = 10; truncatablePrimes.length < 11; i++) {
	if (isTruncatablePrime(i, true) && isTruncatablePrime(i, false))
		truncatablePrimes.push(i);
}

var sum = 0;

for (var prime of truncatablePrimes)
	sum += prime;

console.log(sum);

function isTruncatablePrime(n, left) {
	if (!isPrime(n))
		return false;

	if (n < 10)
		return isPrime(n);

	// Truncate:
	n = "" + n;
	if (left)
		n = n.substring(1, n.length);
	else
		n = n.substring(0, n.length - 1);
	n = Number(n);

	return isTruncatablePrime(n, left);
}

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