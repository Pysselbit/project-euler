
for (var i = 987654321; i >= 0; i--) {
	if (isPandigital(i) && isPrime(i)) {
		console.log(i);
		break;
	}
}

function isPrime(n) {
	for (var i = 2; i < Math.sqrt(n); i++) {
		if (n % i == 0)
			return false;
	}

	return true;
}

function isPandigital(n) {
	var s = "" + n;

	for (var i = 1; i <= s.length; i++) {
		if (s.indexOf("" + i) < 0)
			return false;
	}

	return true;
}