const express = require('express');

const dashboardRouter = express.Router();

function router(nav) {
	dashboardRouter.route('/').get((req, res) => {
		res.render('dashboard', { nav });
	});
	return dashboardRouter;
}

module.exports = router;
