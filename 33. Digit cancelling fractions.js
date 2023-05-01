
var productOfNumerators = 1;
var productOfDenomitators = 1;

// Find digit cancelling fractions:
for (var n = 10; n < 100; n++) {
	for (var d = n + 1; d < 100; d++) {
		var sn = "" + n;
		var sd = "" + d;

		var n1 = Number(sn.substring(0, 1));
		var n2 = Number(sn.substring(1, 2));
		var d1 = Number(sd.substring(0, 1));
		var d2 = Number(sd.substring(1, 2));

		if (n1 == n2)
			continue;

		if (n / d == n1 / d2 && n2 == d1) {
			productOfNumerators *= n;
			productOfDenomitators *= d;
		}
		if (n / d == n2 / d1 && n1 == d2) {
			productOfNumerators *= n;
			productOfDenomitators *= d;
		}
	}
}

// Reduce fraction:
for (var i = productOfNumerators; i > 0; i--) {
	if (productOfNumerators % i == 0 && productOfDenomitators % i == 0) {
		productOfNumerators /= i;
		productOfDenomitators /= i;
	}
}

console.log(productOfDenomitators);