
const N = 50;

var ax = 0;
var ay = 0;

var count = 0;

// Iterate over all positions for b and c:
for (var bx = 0; bx <= N; bx++) {
	var abx = bx - ax;

	for (var by = 0; by <= N; by++) {
		var aby = by - ay;

		// Skip if ab is (0, 0):
		if (abx == 0 && aby == 0)
			continue;

		for (var cx = 0; cx <= N; cx++) {
			var bcx = cx - bx;
			var cax = ax - cx;

			for (var cy = 0; cy <= N; cy++) {
				var bcy = cy - by;
				var cay = ay - cy;

				// Skip if bc or ca is (0, 0):
				if ((bcx == 0 && bcy == 0) || (cax == 0 && cay == 0))
					continue;

				// If any angle is right (dot product is 0), increment count:
				if (abx * bcx + aby * bcy == 0)
					count++;
				else if (bcx * cax + bcy * cay == 0)
					count++;
				else if (cax * abx + cay * aby == 0)
					count++;
			}
		}
	}
}

// All triangles are counted twice (abc/acb):
count /= 2;

console.log(count);