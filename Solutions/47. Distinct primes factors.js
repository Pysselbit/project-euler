
const N = 4;

var primes = [2];
var numbers = new Array(N);

for (var i = 1; !isConsectuive(numbers); i++) {
	if (hasNPrimeFactors(i)) {
		for (var j = N - 1; j > 0; j--) {
			numbers[j] = numbers[j - 1];
		}

		numbers[0] = i;
	}
}

console.log(numbers[N - 1]);

function isConsectuive(numbers) {
	for (var i = 1; i < numbers.length; i++) {
		if (numbers[i - 1] != numbers[i] + 1)
			return false;
	}

	return true;
}

function hasNPrimeFactors(n) {
	if (isPrime(n))
		return false;

	var factors = [];

	while (n > 1) {
		for (var prime of primes) {
			if (n % prime > 0)
				continue;

			if (factors.indexOf(prime) < 0)
				factors.push(prime);

			if (factors.length > N)
				return false;

			n /= prime;
		}
	}

	return factors.length == N;
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