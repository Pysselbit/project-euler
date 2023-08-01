
const N = 1000000;

var primeDivisors = getIndexedPrimeDivisors(N);

var max = 0;
var maxN = 0;

for (var n = 1; n <= N; n++) {
	var primeCount = 1;

	// Count relative primes < n:
	for (var i = 2; i < n; i++) {
		if (isRelativelyPrime(n, i)) {
			primeCount++;

			// Break if below max:
			if (n / primeCount < max)
				break;
		}
	}

	if (n / primeCount > max) {
		max = n / primeCount;
		maxN = n;
	}
}

console.log(maxN);

// Search for common prime divisors of a and b.
function isRelativelyPrime(a, b) {
	var n = Math.min(a, b);

	var divisorsA = primeDivisors[a];
	var divisorsB = primeDivisors[b];

	for (var divisorA of divisorsA) {
		if (divisorsB.includes(divisorA))
			return false;
	}

	return true;
}

// List prime divisors for all numbers up to max.
function getIndexedPrimeDivisors(max) {
	var primes = findPrimes(max);
	var primeDivisorsIndexed = Array(max + 1);

	for (var i = 1; i <= max; i++) {
		var primeDivisors = [];

		for (var j = 0; primes[j] < max; j++) {
			if (Number.isInteger(i / primes[j]))
				primeDivisors.push(primes[j]);
		}

		primeDivisorsIndexed[i] = primeDivisors;
	}

	return primeDivisorsIndexed;
}

// Find primes up to max.
function findPrimes(max) {
	var primes = [2];

	for (var i = 3; i < max; i += 2) {
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

	return primes;
}