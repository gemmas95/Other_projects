const express = require('express');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');

const app = express();

const PORT = 3002;

const nav = [
	{ link: '/dashboard', title: 'Dashboard' },
	{ link: '/list', title: 'Products' },
	{ link: '/', title: 'SignIn' },
	{ link: '/auth/profile', title: 'Profile' }
];

const notLoggedNav = [
	{ link: '/dashboard', title: 'Dashboard' },
	{ link: '/', title: 'SignIn' }
];

app.use(morgan('tiny'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(expressSession({ secret: 'heroes' }));
require('./src/config/passport')(app);

app.use(express.static(path.join(__dirname, '/public')));
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(
	'/css',
	express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css'))
);
app.use(
	'/js',
	express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js'))
);
app.use(
	'/js',
	express.static(path.join(__dirname, 'node_modules/jquery/dist/'))
);

app.get('/', (req, res) => {
	res.redirect('/auth/signIn');
});

const recipesRoutes = require('./src/routes/recipesRoutes')(nav, notLoggedNav);

app.use('/list', recipesRoutes);

const dbRoutes = require('./src/routes/dbRoutes.js')();

app.use('/db', dbRoutes);

const authRoutes = require('./src/routes/authRoutes.js')(nav, notLoggedNav);

app.use('/auth', authRoutes);

const dashboardRoutes = require('./src/routes/dashboardRoutes.js')(
	nav,
	notLoggedNav
);

app.use('/dashboard', dashboardRoutes);

app.listen(PORT, () => debug(`Listening in port ${chalk.green(PORT)}...`));
