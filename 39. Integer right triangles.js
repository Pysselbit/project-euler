
var maxSolutions = 0;
var maxP = 0;

for (var p = 3; p < 1000; p++) {
	var solutions = 0;

	for (var a = 1; a < p / 2; a++) {
		for (var b = 1; b < p / 2; b++) {
			if (p - a - b == Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)))
				solutions++;
		}
	}

	if (solutions > maxSolutions) {
		maxSolutions = solutions;
		maxP = p;
	}
}

console.log(maxP);