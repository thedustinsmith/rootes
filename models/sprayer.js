var mongoose = require('mongoose'),
    utils = require('./utils'),
    Schema = mongoose.Schema;

var SprayerSchema = new Schema({
    sprayerID: String,
    name: String
});

SprayerSchema.methods = {

};

SprayerSchema.statics = {
    add: function (g, cb) {
        g.sprayerID = utils.makeid(7);
        this.create(g, cb);
    }
};

module.exports = mongoose.model('Sprayer', SprayerSchema);