module.exports = function (app) {
    var express = require('express'),
    router = express.Router(),
    db = app.get('db');

router.get('/', function (req, res) {
    db.Applicator.find(function (err, results) {
        res.json(results);
    });
});

router.get('/:applicatorID', function (req, res) {
    db.Applicator.findOne({applicatorID: req.params.applicatorID }, function (err, result) {
        res.json(result);
    });
});

router.post('/', function (req, res) {
    var applicator = new db.Applicator(req.body);
    db.Applicator.add(applicator, function (err, g) {
        res.json(g);
    });
});     

router.put('/:applicatorID', function (req, res) {
    var applicator = new db.Applicator(req.body);
    var data = applicator.toObject();
    delete data._id;
    db.Applicator.findOneAndUpdate({applicatorID: req.params.applicatorID }, data, function (err, result) {
        res.json(result);
    });
});

router.delete('/:applicatorID', function (req, res) {
    db.Applicator.findOneAndRemove({applicatorID: req.params.applicatorID }, function (err, result) {
        res.send({});
    });
});

return router;
};
