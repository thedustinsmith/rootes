var mongoose = require('mongoose'),
    utils = require('./utils'),
    Schema = mongoose.Schema;

var GrowerSchema = new Schema({
    growerID: String,
    name: String,
    address: String,
    phone: String,
    county: String
});

GrowerSchema.methods = {

};

GrowerSchema.statics = {
    add: function (g, cb) {
        g.growerID = utils.makeid(7);
        this.create(g, cb);
    }
};

module.exports = mongoose.model('Grower', GrowerSchema);