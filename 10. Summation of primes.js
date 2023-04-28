
const N = 2000000;

var primes = [2];

for (var i = 3; i < N; i += 2) {
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

var sum = 0;

for (var i = 0; i < primes.length; i++)
	sum += primes[i];

console.log(sum);