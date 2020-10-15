const express = require('express');
const debug = require('debug')('app:dbRoutes');
const { MongoClient } = require('mongodb');
const recipes = require('../../public/mocks/recipes.json');

const recipeRoutes = express.Router();

function router() {
	const url = 'mongodb://localhost:27017';
	const dbname = 'organicMarket';
	const collectionName = 'recipes';

	recipeRoutes.route('/').get((req, res) => {
		(async () => {
			let client = null;

			try {
				client = await MongoClient.connect(url);
				const db = client.db(dbname);
				await db.collection(collectionName).deleteMany({});
				const response = await db
					.collection(collectionName)
					.insertMany(recipes);

				res.json(response);
			} catch (err) {
				debug(err.stack);
			}

			client.close();
		})();

		res.send('mongodb updated!');
	});
	return recipeRoutes;
}

module.exports = router;
