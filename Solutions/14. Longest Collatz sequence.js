
var maxTerms = 0;
var maxNumber = 0;

for (var i = 1; i < 1000000; i++) {
	var j = i;
	var n = 1;

	while (j != 1) {
		if (j % 2 == 0)
			j = j / 2;
		else
			j = 3 * j + 1;

		n++;
	}

	if (n > maxTerms) {
		maxTerms = n;
		maxNumber = i;
	}
}

console.log(maxNumber);