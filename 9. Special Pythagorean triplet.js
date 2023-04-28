
for (var a = 1; a < 1000; a++) {
	for (var b = 1; a + b < 1000; b++) {
		var c = Math.sqrt(a * a + b * b);

		if (a + b + c == 1000)
			console.log(a * b * c);
	}
}