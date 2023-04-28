
const N = 20;

var smallestMultiple = 0;

for (var i = 1; smallestMultiple == 0; i++) {
	var isMultiple = true;

	for (var j = 1; j < N; j++) {
		if (i % j != 0) {
			isMultiple = false;
			break;
		}
	}

	if (isMultiple)
		smallestMultiple = i;
}

console.log(smallestMultiple);