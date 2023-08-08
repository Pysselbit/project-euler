
const N = 1000000000n;

// Check if integer is square (based on the Babylonian algorithm).
function isSquare(n) {
	if (n == 1n)
		return true;
	if (n < 1n)
		return false;

	var x = n / 2n;
	var xs = new Set();

	while (x * x != n) {
		x = (x + (n / x)) / 2n;

		if (xs.has(x))
			return false;

		xs.add(x);
	}
	
	return true;
}

// Check if triangle of lengths a, a, and b has integer area.
function hasIntegerArea(a, b) {
	if (a != b + 1n && a != b - 1n)
		return false;

	if (b % 2n != 0n)
		return false;

	// Triangle height must be integer:
	return isSquare(a * a - (b / 2n) * (b / 2n));
}

// Triangle (a, a, b):
var a = 2n;
var b = 3n;

var sum = 0n;

// Iterate through all triangles (a, a, b) where b = a + 1 or b = a - 1:
while (a + a + b <= N) {
	if (hasIntegerArea(a, b))
		sum += a + a + b;

	if (b > a) {
		a++;
		b--;
	}
	else
		b += 2n;
}

console.log(sum);