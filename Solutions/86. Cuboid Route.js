
const N = 1000000;

function getShortestRoute(w, h, d) {
	// Coordinates of the three possible midpoints:
	var x = w / (1 + h / d); // From x / d == (w - x) / h.
	var y = h / (1 + d / w); // From y / w == (h - y) / d.
	var z = d / (1 + w / h); // From z / h == (d - z) / w.

	var min = Number.MAX_SAFE_INTEGER;

	for (var p of [[x, 0, d], [w, y, 0], [0, h, z]]) {
		var a = Math.sqrt(Math.pow(p[0], 2) + Math.pow(p[1], 2) + Math.pow(p[2], 2));
		var b = Math.sqrt(Math.pow(w - p[0], 2) + Math.pow(h - p[1], 2) + Math.pow(d - p[2], 2));

		min = Math.min(a + b, min);
	}

	return (min);
}

var m = 0;
var dm = 256; // Used for faster search.
var n = 0;

// Check increasing values of m:
while (true) {
	n = 0;

	// Check all unique dimensions under m * m * m for integer routes:
	for (var w = 1; w <= m; w++) {
		for (var h = 1; h <= w; h++) {
			for (var d = 1; d <= h; d++) {
				var route = getShortestRoute(w, h, d);

				// Some room for error:
				if (Math.abs(route - Math.round(route)) < 0.000001)
					n++;
			}
		}
	}

	// Decrease increments the closer we get:
	if (n > N) {
		if (dm == 1)
			break;
		else {
			m -= dm;
			dm /= 2;
		}
	}
	
	m += dm;
}

console.log(m);