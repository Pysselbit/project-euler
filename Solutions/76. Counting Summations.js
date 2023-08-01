
const SUM = 100;

console.log(countSummations(SUM, SUM - 1));

// Subtract numbers from sum until 0 is reached.
function countSummations(sum, max) {
	var count = 0;

	// Max parameter keeps subtrahends sorted to avoid duplicate summations.
	for (var i = 1; i <= max; i++) {
		if (sum - i == 0)
			return count + 1;

		count += countSummations(sum - i, i);
	}

	return count;
}