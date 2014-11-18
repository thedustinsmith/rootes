module.exports = function (app) {
    var express = require('express'),
    router = express.Router(),
    db = app.get('db');

router.get('/', function (req, res) {
    db.Grower.find(function (err, growers) {
        res.json(growers);
    });
});

router.get('/:growerid', function (req, res) {
    db.Grower.findOne({growerID: req.params.growerid }, function (err, grower) {
        res.json(grower);
    });
});

router.post('/', function (req, res) {
    var grower = new db.Grower(req.body);
    db.Grower.add(grower, function (err, g) {
        res.json(g);
    });
});     

router.put('/', function (req, res) {
    var grower = new db.Grower(req.body);
    var data = grower.toObject();
    delete data._id;
    db.Grower.findOneAndUpdate({growerID: grower.growerID }, data, function (err, result) {
        res.json(result);
    });
});

router.delete('/:growerid', function (req, res) {
    db.Grower.findOneAndRemove({growerID: req.params.growerid }, function (err, result) {
        res.send({});
    });
});

return router;
};
