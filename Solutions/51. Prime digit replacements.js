
const TARGET_COUNT = 8;

var primes = [2];

var maxPrimeCount = 0;
var maxPrime = 0;

// Find first prime with target prime variation count:
for (var i = 1; maxPrimeCount < TARGET_COUNT; i++) {
	if (!isPrime(i))
		continue;

	var maps = getValidMaps(i);

	for (var map of maps) {
		var primeCount = countPrimeVariations(i, map);

		if (primeCount > maxPrimeCount) {
			maxPrimeCount = primeCount;
			maxPrime = i;
		}
	}
}

console.log(maxPrime);

// Iterate over all variations using the specified map and count primes:
function countPrimeVariations(num, map) {
	var primeCount = 0;

	for (var i = 0; i <= 9; i++) {
		if (i == 0 && map[0] == 1)
			continue;

		if (isPrime(replaceDigits(num, map, i)))
			primeCount++;
	}

	return primeCount;
}

// Replace all digits marked by map with the specified digit:
function replaceDigits(num, map, digit) {
	num += "";

	for (var i = 0; i < map.length; i++) {
		if (map[i] == 1)
			num = num.substring(0, i) + digit + num.substring(i + 1, num.length);
	}

	return Number(num);
}

// Get a list of maps [...001 to ...111] where all 1s correspond to mathing digits:
function getValidMaps(num) {
	var maps = [];

	var sNum = "" + num;

	var map = 1;
	var sMap = Number(map).toString(2);

	while (sMap.length <= sNum.length) {
		var mapIsValid = true;

		while (sMap.length < sNum.length)
			sMap = "0" + sMap;

		var digit = sNum[sMap.indexOf("1")];

		for (var index = 0; index < sMap.length; index++) {
			if (sMap[index] == "1" && sNum[index] != digit) {
				mapIsValid = false;
				break;
			}
		}

		if (mapIsValid)
			maps.push(sMap);

		map++;
		sMap = Number(map).toString(2);
	}

	return maps;
}

function isPrime(n) {
	// Find primes up to and beyond n:
	if (n > primes[primes.length - 1]) {
		for (var i = primes[primes.length - 1] + 1; primes[primes.length - 1] < n; i++) {
			var isPrime = true;

			for (var j = 0; j < primes.length; j++) {
				if (i % primes[j] == 0) {
					isPrime = false;
					break;
				}
			}

			if (isPrime)
				primes.push(i);
		}
	}

	// Check if prime:
	for (var i = 0; i < primes.length; i++) {
		if (n == primes[i])
			return true;
	}

	return false;
}