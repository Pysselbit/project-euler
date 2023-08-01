
const TRIANGLE = 1;
const SQUARE = 2;
const PENTAGON = 4;
const HEXAGON = 8;
const HEPTAGON = 16;
const OCTAGON = 32;

const POLYGONS = [TRIANGLE, SQUARE, PENTAGON, HEXAGON, HEPTAGON, OCTAGON];

// Index polygonal numbers:
var polygons = new Array(10000);
for (var i = 0; i < POLYGONS.length; i++) {
	for (var j = 1, p = j; p <= 9999; j += i + 1, p += j)
		polygons[p] = polygons[p] | POLYGONS[i];
}

// Generate cyclical numbers (discarding any non-polygonal):
for (var fa = 10; fa <= 99; fa++) {
	for (var ab = 10; ab <= 99; ab++) {
		var a = Number(fa + "" + ab);

		if (!isPolygonal(a))
			continue;

		for (var bc = 10; bc <= 99; bc++) {
			var b = Number(ab + "" + bc);

			if (!isPolygonal(b))
				continue;

			for (var cd = 10; cd <= 99; cd ++) {
				var c = Number(bc + "" + cd);

				if (!isPolygonal(c))
					continue;

				for (var de = 10; de <= 99; de++) {
					var d = Number(cd + "" + de);

					if (!isPolygonal(d))
						continue;

					for (var ef = 10; ef <= 99; ef++) {
						var e = Number(de + "" + ef);
						var f = Number(ef + "" + fa);

						if (!isPolygonal(e) || !isPolygonal(f))
							continue;

						var cycle = [a, b, c, d, e, f];

						if (isAnyPermutationPolygonal(cycle)) {
							console.log(a + b + c + d + e + f);

							return;
						}
					}
				}
			}
		}
	}
}

// Generate permutations of cycle and check for all polygons.
function isAnyPermutationPolygonal(cycle) {
	for (var a = 0; a < 6; a++) {
		for (var b = 0; b < 6; b++) {
			if (b == a)
				continue

			for (var c = 0; c < 6; c++) {
				if (c == a || c == b)
					continue;

				for (var d = 0; d < 6; d++) {
					if (d == a || d == b || d == c)
						continue;

					for (var e = 0; e < 6; e++) {
						if (e == a || e == b || e == c || e == d)
							continue;

						for (var f = 0; f < 6; f++) {
							if (f == a || f == b || f == c || f == d || f == e)
								continue;

							if (isPolygonalInOrder([cycle[a], cycle[b], cycle[c], cycle[d], cycle[e], cycle[f]]))
								return true;
						}
					}
				}
			}
		}
	}

	return false;
}

// Check if cycle elements are polygonal in inreasing order (triangle, square ...).
function isPolygonalInOrder(cycle) {
	for (var i = 0; i < POLYGONS.length; i++) {
		if ((polygons[cycle[i]] & POLYGONS[i]) == 0) 
			return false;
	}

	return true;
}

function isPolygonal(n) {
	return polygons[n] > 0;
}