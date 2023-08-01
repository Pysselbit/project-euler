
var primes = [2];

var comboBreaker = 0;

for (var i = 9; comboBreaker == 0; i += 2) {
	if (isPrime(i))
		continue;

	var isSolved = false;

	for (var j = 0; primes[j] < i; j++) {
		var prime = primes[j];
		
		if (Number.isInteger(Math.sqrt((i - primes[j]) / 2)))
			isSolved = true;
	}

	if (!isSolved)
		comboBreaker = i;
}

console.log(comboBreaker);

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