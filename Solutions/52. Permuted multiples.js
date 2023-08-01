
const N = 6;

for (var i = 1; true; i++) {
	var isValid = true;

	for (var j = N; j > 1; j--) {
		if (!isPermutation(i, j * i)) {
			isValid = false;
			break;
		}
	}

	if (isValid) {
		console.log(i);
		break;
	}
}

function isPermutation(a, b) {
	a += "";
	b += "";

	if (a.length != b.length)
		return false;

	for (var digit of a) {
		var an = 0;
		var bn = 0;

		for (var i = 0; i < a.length; i++) {
			if (a[i] == digit)
				an++;
			if (b[i] == digit)
				bn++;
		}

		if (an != bn)
			return false;
	}

	return true;
}