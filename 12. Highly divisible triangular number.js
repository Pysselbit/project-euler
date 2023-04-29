
const N = 500;

var triangleNumber = 0;

for (var i = 1; true; i++) {
	triangleNumber += i;

	var divisors = 0;

	for (var j = 1; j <= triangleNumber; j++) {
		if (triangleNumber % j == 0)
			divisors++;
	}

	if (divisors > N)
		break;
}

console.log(triangleNumber);