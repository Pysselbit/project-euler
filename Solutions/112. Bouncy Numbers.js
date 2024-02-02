
var bouncyNumberCount = 0;
var totalNumberCount = 0;

for (var n = 1; true; n++) {
	var s = "" + n;

	var isIncreasing = true;
	var isDecreasing = true;

	// Check back and forth for bounciness:
	for (var i = 0; i + 1 < s.length; i++) {
		if (s[i] > s[i + 1])
			isIncreasing = false;

		if (s[s.length - 1 - i] > s[s.length - 2 - i])
			isDecreasing = false;

		if (!isIncreasing && !isDecreasing)
			break;
	}

	if (!isIncreasing && !isDecreasing)
		bouncyNumberCount++;
	totalNumberCount++;

	// Stop at specified ratio:
	if (bouncyNumberCount / totalNumberCount >= 0.99) {
		console.log(n);
		break;
	}
}