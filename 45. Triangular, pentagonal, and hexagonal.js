
var N = 40755;

var it = ip = ih = 1;
var t = p = h = 1;

var next = 1;

while ((t != p || p != h) || next <= N) {
	if (t == p && p == h) {
		next = t;

		it++;
		ip++;
		ih++;

		t = it * (it + 1) / 2;
		p = ip * (3 * ip - 1) / 2;
		h = ih * (2 * ih - 1);
	}

	if (t < p || t < h) {
		it++;
		t = it * (it + 1) / 2;
	}

	if (p < t || p < h) {
		ip++;
		p = ip * (3 * ip - 1) / 2;
	}

	if (h < t || h < p) {
		ih++;
		h = ih * (2 * ih - 1);
	}
}

console.log(next);