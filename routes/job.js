module.exports = function (app) {
    var express = require('express'),
    router = express.Router(),
    db = app.get('db');

router.get('/', function (req, res) {
    db.Job.find(function (err, results) {
        res.json(results);
    });
});

router.get('/:jobID', function (req, res) {
    db.Job.findOne({jobID: req.params.jobID }, function (err, result) {
        res.json(result);
    });
});

router.post('/', function (req, res) {
    var job = new db.Job(req.body);
    db.Job.add(job, function (err, g) {
        res.json(g);
    });
});     

router.put('/:jobID', function (req, res) {
    var job = new db.Job(req.body);
    var data = job.toObject();
    delete data._id;
    db.Job.findOneAndUpdate({jobID: req.params.jobID }, data, function (err, result) {
        res.json(result);
    });
});

router.delete('/:jobID', function (req, res) {
    db.Job.findOneAndRemove({jobID: req.params.jobID }, function (err, result) {
        res.send({});
    });
});

return router;
};
