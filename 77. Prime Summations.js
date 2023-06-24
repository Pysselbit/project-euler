
const N = 5000;

var primes = [2];

for (var i = 1; true; i++) {
	if (countPrimeSummations(i, i - 1) > N) {
		console.log(i);
		break;
	}
}

// Subtract primes from sum until 0 is reached.
function countPrimeSummations(sum, max) {
	findPrimes(sum);

	var count = 0;

	// Max parameter keeps subtrahends sorted to avoid duplicate summations.
	for (var i = 0; primes[i] <= max; i++) {
		var prime = primes[i];

		if (sum - prime == 0)
			return count + 1;
		if (sum - prime < 0)
			break;

		count += countPrimeSummations(sum - prime, prime);
	}

	return count;
}

// Find primes up to and beyond n.
function findPrimes(n) {
	if (n > primes[primes.length - 1]) {
		for (var i = primes[primes.length - 1] + 1; primes[primes.length - 1] < n; i++) {
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
	}
}