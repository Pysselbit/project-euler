
const MAX_L = 1500000;

const MIN_A = 1 / (2 + Math.sqrt(2));
const MAX_A = 1 / 2;

var singleIntTriangleCount = 0;

for (var l = 12; l <= MAX_L; l++) {
	var intTriangleCount = 0;

	for (var a = Math.ceil(MIN_A * l); a < MAX_A * l; a++) {
		// Derived from the following calculation (where a and l are constants):
		//   a + b + c = l
		//   a^2 + b^2 = c^2
		//   c = sqrt(a^2 + b^2)
		//   a + b + sqrt(a^2 + b^2) = l
		//   sqrt(a^2 + b^2) = (l - a) - b
		//   a^2 + b^2 = (l - a)^2 - 2(l - a)b + b^2
		//   a^2 = (l - a)^2 - 2(l - a)b
		//   2(l - a)b = ((l - a)^2 - a^2)
		//   b = ((l - a)^2 - a^2) / 2(l - a)
		var b = (Math.pow(l - a, 2) - Math.pow(a, 2)) / (2 * (l - a));
		var c = l - a - b;

		if (b % 1 == 0 && c % 1 == 0)
			intTriangleCount++;
	}

	if (intTriangleCount == 1)
		singleIntTriangleCount++;
}

console.log(singleIntTriangleCount);