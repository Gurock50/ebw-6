var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

var rides = [
        {
            title: 'Ride 1',
            genre: 'Historical Fiction',
            author: 'Lev Nikolayevich Tolstoy',
            read: false
        },
        {
            title: 'Ride 2',
            genre: 'Historical Fiction',
            author: 'Victor Hugo',
            read: false
        },
        {
            title: 'Ride 3',
            genre: 'Science Fiction',
            author: 'H. G. Wells',
            read: false
        },
        {
            title: 'Ride 4',
            genre: 'Science Fiction',
            author: 'Jules Verne',
            read: false
        },
        {
            title: 'Ride 5',
            genre: 'Fantasy',
            author: 'Henry Kuttner',
            read: false
        },
        {
            title: 'Ride 6',
            genre: 'Fantasy',
            author: 'Kenneth Grahame',
            read: false
        },
        {
            title: 'Ride 7',
            genre: 'History',
            author: 'Mark Twain',
            read: false
        }
    ];

var router = function (nav) {

    adminRouter.route('/addRides')
        .get(function (req, res) {
            var url = 'mongodb://localhost:27017/libraryApp';

            mongodb.connect(url, function (err, db) {
                var collection = db.collection('rides');
                collection.insertMany(rides,
                    function (err, results) {
                        res.send(results);
                        db.close();
                    }
                );

            });

        });

    return adminRouter;
};

module.exports = router;