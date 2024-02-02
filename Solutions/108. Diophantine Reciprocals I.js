
var n;

for (n = 1; true; n++) {
	var count = 0;

	// For x (2n >= x > n):
	for (var x = n * 2; x > n; x--) {
		// Check for sulotion (1/x + 1/y = 1/n => y = xn / x-n):
		if ((x * n) % (x - n) == 0)
			count++;
	}

	if (count >= 1000)
		break;
}

console.log(n);