
var primes = [2];
var circularPrimes = [];

for (var i = 2; i < 1000000; i++) {
	if (!isPrime(i))
		continue;

	var rotations = getRotations(i);

	var isCircularPrime = true;

	for (var rotation of rotations) {
		if (!isPrime(rotation)) {
			isCircularPrime = false;
			break;
		}
	}

	if (isCircularPrime)
		circularPrimes.push(i);
}

console.log(circularPrimes.length);

function getRotations(n) {
	var s = "" + n;

	var rotations = [];

	for (var i = 0; i < s.length; i++) {
		var rotation = "";

		for (var j = i; j < i + s.length; j++) {
			var index = j % s.length;
			rotation += s.substring(index, index + 1);
		}

		rotations.push(rotation);
	}

	return rotations;
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