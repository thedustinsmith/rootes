module.exports = function (app) {
  var express = require('express'),
    router = express.Router();

router.get('/', function (req, res) {
    res.render('index', {
      pageType: 'dustin'
    });
});

router.get('/grower', function (req, res) {
  res.render('grower');
});

router.get('/product', function (req, res) {
  res.render('product');
});

return router;
};
