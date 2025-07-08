
var N = 30;

var memo = new Map();

console.log(countPrizes(N, 0, 0));

function countPrizes(i, l, a) {
	if (!memo.has(i)) memo.set(i, new Map());
	var mi = memo.get(i);

	if (!mi.has(l)) mi.set(l, new Map());
	var ml = mi.get(l);

	if (ml.has(a))
		return ml.get(a);

	if (l == 2)
		return 0;

	if (a == 3)
		return 0;

	if (i == 0)
		return 1;

	var prizeCount = 0;

	prizeCount += countPrizes(i - 1, l, 0); // On time.
	prizeCount += countPrizes(i - 1, l + 1, 0); // Late.
	prizeCount += countPrizes(i - 1, l, a + 1); // Absent.

	ml.set(a, prizeCount);

	return prizeCount;
}
