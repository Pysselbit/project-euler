
const N = 1000n;

const MAX_CYCLE = 10000; // Check for cycles of up to this many digits.
const MIN_REPEATS = 5; // Require this many cycles to be considered repeating.
const FRACTION_LENGTH = MAX_CYCLE * (MIN_REPEATS + 1);

// Used to make the fraction into an big integer:
var scale = 1n;
for (var i = 0; i < FRACTION_LENGTH; i++)
	scale *= 10n;

var longestRecurringCycle = 0;
var longestRecurringCycleDivisor = 0;

for (var divisor = 2n; divisor < N; divisor++) {
	var fraction = "" + (scale / divisor);
	var recurringCycle = getRecurringCycle(fraction);

	if (recurringCycle > longestRecurringCycle) {
		longestRecurringCycle = recurringCycle;
		longestRecurringCycleDivisor = divisor;
	}
}

console.log(longestRecurringCycleDivisor);

function getRecurringCycle(fraction) {
	for (var cycleLength = 1; cycleLength <= MAX_CYCLE; cycleLength++) {
		for (var startPos = 0; startPos < MIN_REPEATS; startPos++) {
			var cycle = fraction.substring(startPos, startPos + cycleLength);

			var isRepeating = true;

			for (var i = 0; i < MIN_REPEATS; i++) {
				var fromIndex = startPos + cycleLength * (i + 1);
				var toIndex = fromIndex + cycleLength;

				if (fraction.substring(fromIndex, toIndex) != cycle) {
					isRepeating = false;
					break;
				}
			}

			if (isRepeating)
				return cycle.length;
		}
	}

	return 0;
}