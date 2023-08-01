
const TARGET = 200;

const COINS = [200, 100, 50, 20, 10, 5, 2, 1];

console.log(countCombinations(TARGET, 0));

function countCombinations(target, coinIndex) {
	var combinations = 0;

	for (var i = coinIndex; i < COINS.length; i++) {
		var coin = COINS[i];

		if (target - coin == 0)
			combinations++;
		else if (target - coin > 0)
			combinations += countCombinations(target - coin, i);
	}

	return combinations;
}