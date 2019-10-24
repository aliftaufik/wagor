module.exports = num => {
	const strNum = String(num)
		.split('')
		.reverse()
		.reduce((arr, char, index) => {
			if (index % 3 == 0 && index != 0) arr.push('.');
			arr.push(char);
			return arr;
		}, [])
		.reverse()
		.join('');
	return `Rp. ${strNum},00`;
};
