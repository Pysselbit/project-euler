
var sum = 0;

for (var i = 1023456789; i <= 9876543210; i++) {
	if (!isPandigital(i))
		continue;

	var s = "" + i;

	if (Number(s.substring(1, 4) % 2 != 0))
		continue;
	if (Number(s.substring(2, 5) % 3 != 0))
		continue;
	if (Number(s.substring(3, 6) % 5 != 0))
		continue;
	if (Number(s.substring(4, 7) % 7 != 0))
		continue;
	if (Number(s.substring(5, 8) % 11 != 0))
		continue;
	if (Number(s.substring(6, 9) % 13 != 0))
		continue;
	if (Number(s.substring(7, 10) % 17 != 0))
		continue;

	sum += i;
}

console.log(sum);

function isPandigital(n) {
	var s = "" + n;

	for (var i = 0; i <= 9; i++) {
		if (s.indexOf("" + i) < 0)
			return false;
	}

	return true;
}