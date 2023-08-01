
var cubes = [];

// Generate cubes:
for (var i = 0; true; i++) {
	var cube = i * i * i;
	var digitCounts = getDigitCounts(cube);

	var permutations = [cube];

	// Check previous cubes for permutations:
	for (var j = cubes.length - 1; j >= 0; j--) {
		if (equals(digitCounts, cubes[j].digitCounts)) {
			permutations.unshift(cubes[j].value)

			if (permutations.length == 5) {
				console.log(permutations[0]);
				return;
			}
		}
	}

	cubes.push({
		value: cube,
		digitCounts: digitCounts
	});
}

// Get occurences of digits 0-9 in an array.
function getDigitCounts(n) {
	var s = "" + n;

	var digitCounts = new Array(10);
	digitCounts.fill(0);

	for (var i = 0; i < s.length; i++)
		digitCounts[s[i]]++;

	return digitCounts;
}

// Digit count equality.
function equals(a, b) {
	for (var i = 0; i <= 9; i++) {
		if (a[i] != b[i])
			return false;
	}

	return true;
}