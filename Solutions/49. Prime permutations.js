
// Find primes:
var primes = [2];
for (var i = 3; i <= 9999; i++) {
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

// Setup primes for faster search:
var isPrime = new Array(9999);
isPrime.fill(false);
for (var prime of primes)
	isPrime[prime] = true;

// Find triplets:
for (var i = 1000; i < 9999; i++) {
	var a = i;
	var b = i + 3330;
	var c = i + 2 * 3330;

	if (c > 9999)
		break;

	if (!(isPrime[a] && isPrime[b] && isPrime[c]))
		continue;

	if (isPermutation(a, b) && isPermutation(b, c)) {
		var s = "" + a + b + c;

		// Skip the given number:
		if (s != "148748178147")
			console.log (s);
	}
}

function isPermutation (a, b) {
	a += "";
	b += "";

	if (a.length != b.length)
		return false;

	for (var letter of a) {
		if (b.indexOf(letter) < 0)
			return false;
	}

	return true;
}