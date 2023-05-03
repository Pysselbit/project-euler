
var maxDigitalSum = 0;

for (var a = 1n; a < 100n; a++) {
	for (var b = 0; b < 100; b++) {
		var n = 1n;

		for (var i = 0; i < b; i++)
			n *= a;

		var s = "" + n;
		var digitalSum = 0;

		for (var i = 0; i < s.length; i++)
			digitalSum += Number(s[i]);
		
		if (digitalSum > maxDigitalSum)
			maxDigitalSum = digitalSum;
	}
}

console.log(maxDigitalSum);