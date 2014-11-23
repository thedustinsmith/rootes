module.exports = function (app) {
    var express = require('express'),
    router = express.Router(),
    db = app.get('db');

router.get('/', function (req, res) {
    db.Sprayer.find(function (err, results) {
        res.json(results);
    });
});

router.get('/:sprayerID', function (req, res) {
    db.Sprayer.findOne({sprayerID: req.params.sprayerID }, function (err, result) {
        res.json(result);
    });
});

router.post('/', function (req, res) {
    var sprayer = new db.Sprayer(req.body);
    db.Sprayer.add(sprayer, function (err, g) {
        res.json(g);
    });
});     

router.put('/:sprayerID', function (req, res) {
    var sprayer = new db.Sprayer(req.body);
    var data = sprayer.toObject();
    delete data._id;
    db.Sprayer.findOneAndUpdate({sprayerID: req.params.sprayerID }, data, function (err, result) {
        res.json(result);
    });
});

router.delete('/:sprayerID', function (req, res) {
    db.Sprayer.findOneAndRemove({sprayerID: req.params.sprayerID }, function (err, result) {
        res.send({});
    });
});

return router;
};
