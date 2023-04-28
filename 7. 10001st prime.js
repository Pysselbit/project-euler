
const N = 10001;

var primes = [2];

for (var i = 3; primes.length < N; i += 2) {
	var isPrime = true;

	for (var j = 1; j < primes.length; j++) {
		if (i % primes[j] == 0) {
			isPrime = false;
			break;
		}
	}

	if (isPrime)
		primes.push(i);
}

console.log(primes[N - 1]);