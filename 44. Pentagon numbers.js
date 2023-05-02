
var d = 0;

for (var i = 2; d == 0; i++) {
	for (var j = i - 1; j > 0; j--) {
		var a = i * (3 * i - 1) / 2;
		var b = j * (3 * j - 1) / 2;

		if (isPentagonal(a + b) && isPentagonal(a - b))
			d = a - b;
	}
}

console.log(d);

function isPentagonal(n) {
	for (var i = 1; true; i++) {
		var p = i * (3 * i - 1) / 2;

		if (p == n)
			return true;

		if (p > n)
			return false;
	}
}