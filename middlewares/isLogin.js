module.exports = (req, res, next) => {
	if (req.session.User) {
		next();
	} else {
		res.redirect('/');
	}
};
