
var fraction = "";

for (var i = 1; fraction.length < 1000000; i++)
	fraction += i;

var product = 1;

for (var i = 0; i <= 6; i++) {
	var n = Math.pow(10, i);

	product *= Number(fraction.substring(n - 1, n));
}

console.log(product);