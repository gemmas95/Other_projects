const passport = require('passport');
const { Strategy } = require('passport-local');
const { MongoClient } = require('mongodb');
const debug = require('debug')('app:local.strategy');

function localStrategy() {
	passport.use(
		new Strategy(
			{
				usernameField: 'user',
				passwordField: 'password'
			},
			(username, password, done) => {
				let client = null;
				const mongoUrl = 'mongodb://localhost:27017';
				const dbName = 'organicMarket';
				const collectionName = 'users';

				(async () => {
					try {
						client = await MongoClient.connect(mongoUrl);
						const db = client.db(dbName);
						const collection = db.collection(collectionName);
						const user = await collection.findOne({ user: username });
						if (user && user.password === password) {
							done(null, user);
						} else {
							done(null, false);
						}
					} catch (err) {
						debug(err.stack);
					}

					client.close();
				})();
			}
		)
	);
}

module.exports = localStrategy;
