var express = require('express'),
		app = express(),
    cons = require('consolidate'),
    bodyParser = require('body-parser');

app.engine('html', cons.swig);
app.set('view engine', 'html');
app.use('/assets', express.static(__dirname + '/assets/dist'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.set('db', require('./models'));

/* Routes */
var routes = require('./routes')(app);

app.listen(8000, function() {
	console.log("Server listening on port 8000");
});