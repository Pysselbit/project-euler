
const N = 1000000;

var partitions = [1];
var pentagonals = [1];
var k = -1;

// Generate until p is divisible by N (p % N == 0):
while (partitions[partitions.length - 1] != 0) {
	var n = partitions.length;

	// Generate pentagonal numbers G(k) for k = 1, -1, 2, -2, 3 ...
	while (pentagonals[pentagonals.length - 1] < n) {
		pentagonals.push(k * (3 * k - 1) / 2);

		if (k > 0)
			k = -k;
		else
			k = -k + 1;
	}

	// Find p(n) = p(n - 1) + p(n - 2) - p(n - 5) - p(n - 7) + ...
	// The subtrahends 1, 2, 5, 7 ... are the pentagonal numbers.
	var p = i = 0;
	while (n - pentagonals[i] >= 0) {
		if (i % 4 == 0 || i % 4 == 1)
			p += partitions[n - pentagonals[i]];
		else
			p -= partitions[n - pentagonals[i]];

		// Modulo to keep p small (since we are only interested in divisibility):
		p = ((p % N) + N) % N;
		i++;
	}

	partitions.push(p);
}

console.log(partitions.length - 1);