
const N = 1000000;

// Find primes up to N:
var primes = [2];
for (var i = 3; i < N; i++) {
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

var maxPrime = 0;
var maxTerms = 0;

// Find prime with maximum number of prime terms:
for (var prime of primes) {
	for (var i = 0; primes[i] < prime; i++) {
		var sum = 0;
		var terms = 0;

		for (var j = 0; sum < prime; j++) {
			sum += primes[i + j];
			terms++;
		}

		if (sum == prime && terms > maxTerms) {
			maxPrime = prime;
			maxTerms = terms;
		}
	}
}

console.log(maxPrime);