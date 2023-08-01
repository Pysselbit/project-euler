
const N_DIGITS = 1000;

var stop = 1n;
for (var i = 1; i < N_DIGITS; i++)
	stop *= 10n;

var a = 1n;
var b = 1n;

var index = 2;

while (b < stop) {
	var c = a + b;

	var a = b;
	var b = c;

	index++;
}

console.log(index)