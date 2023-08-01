
var sum = 0;

for (var i = 0; i < 10000; i++) {
	var j = d(i);

	if (d(j) == i && i != j)
		sum += i;
}

console.log(sum);

function d(n) {
	var d = 0;

	for (var i = 1; i <= n / 2; i++) {
		if (n % i == 0)
			d += i;
	}

	return d;
}