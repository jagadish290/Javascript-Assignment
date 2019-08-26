function beautifulNumber(i, j, k) {
	var count = 0;
	while (i != j) {
		var reverse = 0;

		reverse =
			parseFloat(
				i
					.toString()
					.split('')
					.reverse()
					.join('')
			) * Math.sign(i);
		if (Math.abs(i - reverse) % k == 0) {
			count++;
			i++;
		}
	}
	return count;
}

beautifulNumber(5, 9, 2);
