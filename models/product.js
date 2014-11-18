var mongoose = require('mongoose'),
    utils = require('./utils'),
    Schema = mongoose.Schema;

var ProductSchema = new Schema({
    productID: String,
    epaNum: String,
    name: String
});

ProductSchema.methods = {

};

ProductSchema.statics = {
    add: function (g, cb) {
        g.productID = utils.makeid(7);
        this.create(g, cb);
    }
};

module.exports = mongoose.model('Product', ProductSchema);