var express = require('express');

var app = express();

var port = process.env.PORT || 5000;
var nav = [{
    Link: '/Rides',
    Text: 'Rides'
}, {
    Link: '/Authors',
    Text: 'Stuff'
}];
var rideRouter = require('./src/routes/rideRoutes')(nav);
var adminRouter = require('./src/routes/adminRoutes')(nav);

app.use(express.static('public'));
app.set('views', './src/views/pages');

app.set('view engine', 'ejs');

app.use('/Rides', rideRouter);
app.use('/Admin', adminRouter);

app.get('/', function (req, res) {
    res.render('index', {
        title: 'Explore-By-Wheel',
        nav: nav
    });
});

app.listen(port, function (err) {
    console.log('running server on port ' + port);
});