
var a = 1n;
var b = 1n;

// Generate Fobonacci sequence:
for (var k = 1n; true; k++) {
	if (isPandigital(a)) {
		console.log(k);
		break;
	}

	var c = a + b;
	a = b;
	b = c;
}

// Check if n is 1-9 pandigital, front and back.
function isPandigital(n) {
	var s = "" + n;

	if (s.length < 9)
		return false;

	var a = s.substring(0, 9);
	var b = s.substring(s.length - 9, s.length);

	for (var d = 1; d <= 9; d++) {
		if (!a.includes(d) || !b.includes(d))
			return false;
	}

	return true;
}