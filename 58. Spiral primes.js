
var nPrimes = 0;
var nTotal = 1;

for (var size = 3; true; size += 2) {
	a = size * size;
	b = a - (size - 1);
	c = b - (size - 1);
	d = c - (size - 1);

	if (isPrime(b))
		nPrimes++;
	if (isPrime(c))
		nPrimes++;
	if (isPrime(d))
		nPrimes++;

	nTotal += 4;

	if (nPrimes / nTotal < 0.1) {
		console.log(size);
		break;
	}
}

function isPrime(n) {
	if (n % 2 == 0)
		return false;

	for (var j = 3; j <= Math.sqrt(n); j += 2) {
		if (n % j == 0)
			return false;
	}

	return true;
}