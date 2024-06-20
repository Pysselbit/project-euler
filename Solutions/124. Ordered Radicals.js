
const N = 100000;
const E = 10000;

var radicals = [];
var primes = [];

// Find primes and radicals:
for (var n = 1; n <= N; n++) {
	var radical = 1;

	for (var i = 1; i < primes.length; i++) {
		var prime = primes[i];

		if (n % prime == 0)
			radical *= prime;
	}

	if (radical == 1) {
		primes.push(n);
		radical = n;
	}

	radicals.push({ n: n, radical: radical });
}

// Sort:
radicals.sort(function(a, b) {
	if (a.radical == b.radical)
		return a.n - b.n;

	return a.radical - b.radical;
});

console.log(radicals[E - 1].n);