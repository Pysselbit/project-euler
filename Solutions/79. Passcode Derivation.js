
const FRAGMENTS = [
	319, 680, 180, 690, 129, 620, 762, 689, 762, 318,
	368, 710, 720, 710, 629, 168, 160, 689, 716, 731,
	736, 729, 316, 729, 729, 710, 769, 290, 719, 680,
	318, 389, 162, 289, 162, 718, 729, 319, 790, 680,
	890, 362, 319, 760, 316, 729, 380, 319, 728, 716 ];

for (var passcode = 100; true; passcode++) {
	var isValid = true;

	for (var fragment of FRAGMENTS) {
		if (!validate(fragment, passcode)) {
			isValid = false;
			break;
		}
	}

	if (isValid) {
		console.log(passcode);
		break;
	}
}

function validate(fragment, passcode) {
	fragment += "";
	passcode += "";

	fi = 0;
	for (var pi = 0; pi < passcode.length; pi++) {
		if (passcode.substring(pi, pi + 1) == fragment.substring(fi, fi + 1)) {
			fi++;

			if (fi >= fragment.length)
				return true;
		}
	}

	return false;
}