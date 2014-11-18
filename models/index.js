// var dbConfig = {
// 	client: 'sqlite3',
// 	connection: {
// 		filename: '/Users/Administrator/Databases/ExpressTemplate'
// 	}
// };

// /* postgres or mysql */
// 	// connection: {
// 	// 	host: 'localhost',
// 	// 	user: '',
// 	// 	password:'',
// 	// 	database: 'ExpressTemplate',
// 	// 	charset: 'utf8'
// 	// }
// /* end */

// var knex = require('knex')(dbConfig);
// var bookshelf = require('bookshelf')(knex);
// var db = { bookshelf: bookshelf };

// require('./parent')(db);
// require('./child')(db);

// module.exports = db;
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/rootes');

module.exports = {
  Grower: require('./grower'),
  Product: require('./product')
};