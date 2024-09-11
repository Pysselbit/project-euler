
for (var i = 1010101010n; i <= 1389026624n; i++) {
	var s = "" + (i * i);
	var isMatch = true;

	for (var j = 0; j < 10; j++) {
		if (s[2 * j] != "" + ((j + 1) % 10)) {
			isMatch = false;

			break;
		}
	}

	if (isMatch) {
		console.log(i);

		break;
	}
}