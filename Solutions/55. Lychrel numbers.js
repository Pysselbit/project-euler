
var lynchrelCount = 0;

for (var i = 0; i < 10000; i++) {
	var isLynchrel = true;

	var a = i;
	var b = reverse(a);

	for (var j = 0; j < 50; j++) {
		if (isPalindrome(a + b)) {
			isLynchrel = false;
			break;
		}

		a = a + b;
		b = reverse(a);
	}

	if (isLynchrel)
		lynchrelCount++;
}

console.log(lynchrelCount);

function reverse(n) {
	n += "";

	var r = "";

	for (var i = n.length - 1; i >= 0; i--)
		r += n[i];

	return Number(r);
}

function isPalindrome(n) {
	n += "";

	for (var i = 0; i < n.length / 2; i++) {
		if (n[i] != n[n.length - 1 - i])
			return false;
	}

	return true;
}