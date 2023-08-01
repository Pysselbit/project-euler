
const N = 600851475143;

var primes = [];

for (var i = 3; i < Math.sqrt(N); i += 2) {
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

var largestPrimeFactor = 1;

for (var i = 0; i < primes.length; i++) {
	if (N % primes[i] == 0)
		largestPrimeFactor = primes[i];
}

console.log(largestPrimeFactor);