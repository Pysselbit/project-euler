
const D4_COUNT = 9;
const D6_COUNT = 6;

var results = getOutcomes();
var probability = results.d4Wins / (results.d4Wins + results.d6Wins + results.draws);

// Round to 7 decimals:
console.log(Math.round(10000000 * probability) / 10000000);

// Get all possible outcomes.
function getOutcomes(d4s = "", d6s = "", results = { d4Wins: 0, d6Wins: 0, draws: 0 }) {
	if (d4s.length < D4_COUNT) {
		for (var i = 1; i <= 4; i++)
			getOutcomes(d4s + i, d6s, results);
	}
	else if (d6s.length < D6_COUNT) {
		for (var i = 1; i <= 6; i++)
			getOutcomes(d4s, d6s + i, results);
	}
	else {
		var d4Total = getTotal(d4s);
		var d6Total = getTotal(d6s);

		if (d4Total > d6Total)
			results.d4Wins++;
		else if (d6Total > d4Total)
			results.d6Wins++;
		else
			results.draws++;
	}

	return results;
}

// Get digit sum.
function getTotal(n) {
	var total = 0;

	for (var i of n)
		total += parseInt(i);

	return total;
}