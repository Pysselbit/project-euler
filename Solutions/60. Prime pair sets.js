
var primes = [2];

for (var a = 7; true; a += 2) {
	if (!isPrimeInList(a))
		continue;

	for (ib = 0, b = primes[ib]; primes[ib] < a; ib++, b = primes[ib]) {
		if (!isConcatPrime(a, b))
			continue;

		for (ic = 0, c = primes[ic]; primes[ic] < b; ic++, c = primes[ic]) {
			if (!isConcatPrime(a, c) || !isConcatPrime(b, c))
				continue;

			for (id = 0, d = primes[id]; primes[id] < c; id++, d = primes[id]) {
				if (!isConcatPrime(a, d) || !isConcatPrime(b, d) || !isConcatPrime(c, d))
					continue;

				for (ie = 0, e = primes[ie]; primes[ie] < d; ie++, e = primes[ie]) {
					if (!isConcatPrime(a, e) || !isConcatPrime(b, e) || !isConcatPrime(c, e) || !isConcatPrime(d, e))
						continue;

					console.log(a + b + c + d + e);
					return;
				}
			}
		}
	}
}

// Check if both concatenations  of a and b are prime.
function isConcatPrime(a, b) {
	return isPrimeForce(Number(a + "" + b)) && isPrimeForce(Number(b + "" + a));
}

// Slower but creates a list of primes up to and beyond n.
function isPrimeInList(n) {
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

// Faster but only checks one number.
function isPrimeForce(n) {
	if (n % 2 == 0)
		return false;

	for (var j = 3; j <= Math.sqrt(n); j += 2) {
		if (n % j == 0)
			return false;
	}

	return true;
}