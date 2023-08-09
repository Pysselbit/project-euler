
const N = 10000000000;

var p = 1;

for (var e = 0; e < 7830457; e++)
	p = (p * 2) % N;

p = ((28433 * p) % N) + 1;

console.log(p);