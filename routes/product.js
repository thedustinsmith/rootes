module.exports = function (app) {
    var express = require('express'),
    router = express.Router(),
    db = app.get('db');

router.get('/', function (req, res) {
    db.Product.find(function (err, prods) {
        res.json(prods);
    });
});

router.get('/:productid', function (req, res) {
    db.Product.findOne({productID: req.params.productid }, function (err, grower) {
        res.json(grower);
    });
});

router.post('/', function (req, res) {
    var product = new db.Product(req.body);
    db.Product.add(product, function (err, g) {
        res.json(g);
    });
});     

router.put('/', function (req, res) {
    var product = new db.Product(req.body);
    var data = grower.toObject();
    delete data._id;
    db.Product.findOneAndUpdate({productID: product.productID }, data, function (err, result) {
        res.json(result);
    });
});

router.delete('/:productID', function (req, res) {
    db.Product.findOneAndRemove({productID: req.params.productID }, function (err, result) {
        res.send({});
    });
});

return router;
};
