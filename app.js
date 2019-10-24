const express = require('express');
const app = express();
const session = require('express-session');

const routes = require('./routes');

app.use(
	session({
		secret: 'wagor waroeng gorengan',
		resave: false,
		saveUninitialized: true,
		cookie: { secure: false }
	})
);

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use('/', routes);

app.listen(3000, () => console.log('App listening to port 3000'));
