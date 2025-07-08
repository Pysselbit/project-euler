
const N = 100000000;

let primes = getPrimes(N);
let semiprimeCount = 0;

// Generate all two-factor composite numbers below N:
for (let i = 0; i < primes.length; i++) {
	for (let j = i; j < primes.length; j++) {
		if (primes[i] * primes[j] < N)
			semiprimeCount++;
		else
			break;
	}
}

console.log(semiprimeCount);

// Generate primes using the Sieve of Eratosthenes.
function getPrimes(limit) {
	let isPrime = new Array(limit + 1).fill(true);
	isPrime[0] = isPrime[1] = false;

	for (let i = 2; i * i <= limit; i++) {
		if (!isPrime[i])
			continue;

		for (let j = i * i; j <= limit; j += i)
			isPrime[j] = false;
	}

	let primes = [];
	for (let i = 2; i <= limit; i++) {
		if (isPrime[i])
			primes.push(i);
	}

	return primes;
}