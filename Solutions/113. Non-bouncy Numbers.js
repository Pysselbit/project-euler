
const DIGITS = 100;

var increasingNumbers = countOrderedNumbers(1, 9, DIGITS);
var decreasingNumbers = countOrderedNumbers(0, 9, DIGITS);
var equalDigitNumbers = 9 * DIGITS;
var nonBouncyNumbers = increasingNumbers + decreasingNumbers - equalDigitNumbers;

console.log(nonBouncyNumbers);

function countOrderedNumbers(fromDigit, toDigit, toDigitCount) {
	var allSums = [];

	for (var digitPos = 0; digitPos < toDigitCount; digitPos++) {
		var sums = {};

		for (var digit = fromDigit; digit <= toDigit; digit++) {
			if (digitPos == 0) {
				sums[digit] = digit > 0 ? 1 : 0;
			}
			else {
				var sum = 0;

				for (var adjacentDigit = digit; adjacentDigit <= 9; adjacentDigit++) {
					sum += allSums[digitPos - 1][adjacentDigit];
				}

				sums[digit] = sum;
			}
		}

		allSums.push(sums);
	}

	var totalSum = 0;

	for (var sums of allSums) {
		for (var digit in sums)
			totalSum += sums[digit];
	}

	return totalSum;
}