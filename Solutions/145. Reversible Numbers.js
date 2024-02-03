
const EVENS = "02468";

var count = 0;

for (var i = 1; i < 1000000000; i++) {
	if (i % 10 == 0)
		continue;

	var r = Number(("" + i).split("").reverse().join(""));
	var s = "" + (i + r);

	var isReversible = true;
	for (var even of EVENS) {
		if (s.includes(even)) {
			isReversible = false;
			break;
		}
	}

	if (isReversible)
		count++;
}

console.log(count);