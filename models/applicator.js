var mongoose = require('mongoose'),
    utils = require('./utils'),
    Schema = mongoose.Schema;

var ApplicatorSchema = new Schema({
    applicatorID: String,
    name: String,
    certID: String
});

ApplicatorSchema.methods = {

};

ApplicatorSchema.statics = {
    add: function (g, cb) {
        g.applicatorID = utils.makeid(7);
        this.create(g, cb);
    }
};

module.exports = mongoose.model('Applicator', ApplicatorSchema);