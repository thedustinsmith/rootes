module.exports = function (app) {
  var express = require('express'),
      async = require('async'),
      db = app.get('db'),
      router = express.Router();

router.get('/', function (req, res) {
  var queryResults = {};
    async.parallel([
      function (cb) { 
        db.Grower.find().exec(function (err, growers) {
          queryResults.growers = growers;
          cb(err);
        })
      },
      function (cb) { 
        db.Sprayer.find().exec(function (err, sprayers) {
          queryResults.sprayers = sprayers;
          cb(err);
        })
      },
      function (cb) { 
        db.Applicator.find().exec(function (err, applicators) {
          queryResults.applicators = applicators;
          cb(err);
        })
      },
      function (cb) { 
        db.Job.find().exec(function (err, jobs) {
          queryResults.jobs = jobs;
          cb(err);
        })
      }
    ], function (err) {
      console.log(queryResults.jobs);
      res.render('index', {
        applicators: queryResults.applicators,
        sprayers: queryResults.sprayers,
        growers: queryResults.growers
      });
    });
});

router.get('/grower', function (req, res) {
  res.render('grower');
});

router.get('/product', function (req, res) {
  res.render('product');
});

router.get('/applicator', function (req, res) {
  res.render('applicator');
});

router.get('/sprayer', function (req, res) {
  res.render('sprayer');
});

return router;
};
