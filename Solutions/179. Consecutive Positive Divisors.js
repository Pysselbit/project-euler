
const N = 10000000;

var consecutiveCount = 0;
var divisorCountA, divisorCountB;

for (var n = 2; n <= N; n++) {
	divisorCountB = 0;

	for (var i = 1; i <= Math.sqrt(n); i++) {
		if (n % i == 0) {
			divisorCountB++;

			if (i * i != n)
				divisorCountB++;
		}
	}

	if (divisorCountB == divisorCountA)
		consecutiveCount++;

	divisorCountA = divisorCountB;
}

console.log(consecutiveCount);