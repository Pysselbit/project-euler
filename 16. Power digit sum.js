
var n = 1n;

for (var i = 0; i < 1000; i++)
	n *= 2n;

var s = "" + n;

var sum = 0;

for (var i = 0; i < s.length; i++)
	sum += Number(s.substring(i, i + 1));

console.log(sum);