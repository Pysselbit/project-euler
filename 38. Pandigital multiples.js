
var maxConcatenatedProduct = 0;

for (var i = 1; i < 100000; i++) {
	var concatenatedProduct = "";

	for (var j = 1; concatenatedProduct.length < 9; j++)
		concatenatedProduct += j * i;
	
	if (isPandigital(concatenatedProduct)) {
		concatenatedProduct = Number(concatenatedProduct);

		if (concatenatedProduct > maxConcatenatedProduct)
			maxConcatenatedProduct = concatenatedProduct;
	}
}

console.log(maxConcatenatedProduct);

function isPandigital(n) {
	var s = "" + n;

	if (s.length != 9)
		return false;

	for (var i = 1; i <= 9; i++) {
		if (s.indexOf("" + i) < 0)
			return false;
	}

	return true;
}