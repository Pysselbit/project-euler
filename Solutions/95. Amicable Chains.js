
const N = 1000000;

// Get sum of proper divisors (capped at N + 1).
function sumProperDivisors(n) {
	var sum = 0;

	for (var i = Math.floor(n / 2); i > 0; i--) {
		if (Number.isInteger(n / i))
			sum += i;

		if (sum > N)
			return N + 1;
	}

	return sum;
}

// Index chain lengths for faster search:
var chainLengths = new Array(N).fill(0);

// Iterate through all possible chains:
for (var start = 1; start <= N; start++) {
	if (chainLengths[start] != 0)
		continue;

	var chain = [start];
	var chainIndex = -1;

	while (chainIndex < 0) {
		var next = sumProperDivisors(chain[chain.length - 1]);

		// Break if invalid or has been seen before:
		if (next < 1 || next > N || chainLengths[next] != 0)
			break;

		for (var i = 0; i < chain.length; i++) {
			if (next == chain[i]) {
				chainIndex = i;
				break;
			}
		}

		if (chainIndex < 0)
			chain.push(next);
	}

	// No repeating chain - set all members to -1:
	if (chainIndex < 0) {
		for (var member of chain)
			chainLengths[member] = -1;
	}
	// Repeating chain - set all members to chain length, and any non-members to -1:
	else {
		for (var i = 0; i < chainIndex; i++)
			chainLengths[chain[i]] = -1;

		for (var i = chainIndex; i < chain.length; i++)
			chainLengths[chain[i]] = chain.length - chainIndex;
	}
}

// Find smallest member of biggest chain:
var max = 0;
for (var i = 0; i < chainLengths.length; i++) {
	if (chainLengths[i] > max)
		max = i;
}

console.log(max);