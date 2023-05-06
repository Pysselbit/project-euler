
var hits = 0;

for (var i = 1n; i < 1000; i++) {
	var n = 1n;

	for (var j = 1; j < 100; j++) {
		n *= i;

		if (("" + n).length == j) {
			hits++;
		}
	}
}

console.log(hits);