
var sum = 0;

var a = b = 1;

while (true) {
	var c = a + b;

	if (c > 4000000)
		break;

	if (c % 2 == 0)
		sum += c;

	a = b;
	b = c;
}

console.log(sum);