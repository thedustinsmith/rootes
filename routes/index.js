module.exports = function (app) {
  var home = require('./home')(app);
	var product = require('./product')(app);
	var grower = require('./grower')(app);

	app.use('/', home);
  app.use('/api/growers', grower)
	app.use('/api/products', product)

	return {
		home: home,
		grower: grower
	};
};