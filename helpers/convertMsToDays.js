module.exports = ms => {
	const day = 86400000;
	if (ms <= 0 || Math.floor(ms / day) < 1) {
		return 0;
	} else {
		return Math.floor(ms / day);
	}
};
