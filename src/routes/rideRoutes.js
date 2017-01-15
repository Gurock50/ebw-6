var express = require('express');
var rideRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;

var router = function (nav) {

    rideRouter.route('/')
        .get(function (req, res) {
            var url = 'mongodb://localhost:27017/libraryApp';

            mongodb.connect(url, function (err, db) {
                var collection = db.collection('rides');

                collection.find({}).toArray(
                    function (err, results) {
                        res.render('rideListView', {
                            title: 'Explore-By-Wheel',
                            nav: nav,
                            rides: results
                        });
                    }
                );
            });

        });

    rideRouter.route('/:id')
        .get(function (req, res) {
            var id = new objectId(req.params.id);
            var url = 'mongodb://localhost:27017/libraryApp';

            mongodb.connect(url, function (err, db) {
                var collection = db.collection('rides');

                collection.findOne({_id: id},
                    function (err, results) {
                        res.render('rideView', {
                            title: 'Ride',
                            nav: nav,
                            ride: results
                        });

                    }
                );

            });

        });

    return rideRouter;
};
module.exports = router;