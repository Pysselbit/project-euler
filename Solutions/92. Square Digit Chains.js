
var n = 0;

for (var i = 1; i < 10000000; i++) {
	var j = i;

	while (j != 1 && j != 89) {
		var s = "" + j;
		j = 0;

		for (var c of s)
			j += Math.pow(parseInt(c), 2);
	}

	if (j == 89)
		n++;
}

console.log(n);