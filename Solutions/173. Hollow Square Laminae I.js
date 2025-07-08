
const N = 1000000;

var laminaCount = 0;

for (var outer = 3; 4 * (outer - 1) <= N; outer++) {
	var tileCount = 0;

	for (var inner = outer; inner >= 3; inner -= 2) {
		tileCount += 4 * (inner - 1);

		if (tileCount <= N)
			laminaCount++;
		else
			break;
	}
}

console.log(laminaCount);