module.exports = function (app) {
  var home = require('./home')(app);
	var product = require('./product')(app);
	var grower = require('./grower')(app);
	var applicator = require('./applicator')(app);
	var sprayer = require('./sprayer')(app);
	var job = require('./job')(app);

	app.use('/', home);
  app.use('/api/growers', grower);
	app.use('/api/products', product);
	app.use('/api/applicators', applicator);
	app.use('/api/sprayers', sprayer);
	app.use('/api/jobs', job);

	return {
		home: home,
		grower: grower
	};
};