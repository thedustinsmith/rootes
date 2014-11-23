var mongoose = require('mongoose'),
    utils = require('./utils'),
    Schema = mongoose.Schema;

var JobSchema = new Schema({
    jobID: String,
    applicatorID: String,
    sprayerID: String,
    growerID: String,
    locationID: String, 
    gallonsPerAcre: Number,
    nozzle: String,
    date: Date,
    startTime: String, 
    endTime: String,
    windDirection: String,
    windSpeed: String,
    temperature: String,
    humidty: String,
    crop: String,
    applicationType: String,
    cropHeight: String,
    targetPest: String
});

JobSchema.methods = {

};

JobSchema.statics = {
    add: function (g, cb) {
        g.jobID = utils.makeid(7);
        this.create(g, cb);
    }
};

module.exports = mongoose.model('Job', JobSchema);