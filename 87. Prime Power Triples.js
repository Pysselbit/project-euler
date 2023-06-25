
const N = 50000000;

// Find primes and its squares, cubes, and fourth powers:
var primes = [2];
var primes2 = [Math.pow(2, 2)];
var primes3 = [Math.pow(2, 3)];
var primes4 = [Math.pow(2, 4)];
for (var i = 3; true; i++) {
	var isPrime = true;

	for (var prime of primes) {
		if (i % prime == 0) {
			isPrime = false;
			break;
		}
	}

	// Add primes, squres, cubes, and fourth powers up to N:
	if (isPrime) {
		var i2 = Math.pow(i, 2);
		var i3 = Math.pow(i, 3);
		var i4 = Math.pow(i, 4);

		if (i4 < N)
			primes4.push(i4);
		if (i3 < N)
			primes3.push(i3);
		if (i2 < N)
			primes2.push(i2);
		else
			break;

		primes.push(i);
	}
}

// Index all numbers up to N, for constant time search:
var primePowerTriplets = Array(N)
for (var i = 0; i < primePowerTriplets.length; i++)
	primePowerTriplets[i] = false;

// Find all prime power triplets up to N:
for (var prime4 of primes4) {
	for (var prime3 of primes3) {
		if (prime3 + prime4 >= N)
			break;

		for (var prime2 of primes2) {
			var sum = prime2 + prime3 + prime4;

			if (sum < N)
				primePowerTriplets[sum] = true;
			else
				break;
		}
	}
}

// Count all prime power triplets:
var count = 0;
for (var i = 0; i < primePowerTriplets.length; i++) {
	if (primePowerTriplets[i])
		count++;
}

console.log(count);