
var products = [];

for (var a = 1; a < 10000; a++) {
	for (var b = 1; b < 10000; b++) {
		var c = a * b;

		if (isPandigital(a, b, c)) {
			if (products.indexOf(c) < 0)
				products.push(c);
		}
	}
}

var productSum = 0;

for (var product of products)
	productSum += product;

console.log(productSum);

function isPandigital(a, b, c) {
	var s = "" + a + b + c;

	if (s.length != 9)
		return false;

	for (var i = 1; i <= 9; i++) {
		if (s.indexOf("" + i) < 0)
			return false;
	}

	return true;
}