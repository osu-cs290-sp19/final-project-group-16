var fs = require('fs');
var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;

var app = express();
var port = process.env.PORT || 3000;

// mongo log in info
var mongoHost = "classmongo.engr.oregonstate.edu";
var mongoPort = 27017;
var mongoUser = "cs290_maithe";
var mongoPassword = "cs290_maithe";
var mongoDBName = "cs290_maithe";

var mongoUrl = `mongodb://${mongoUser}:${mongoPassword}@${mongoHost}:${mongoPort}/${mongoDBName}`;
var db = null;

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(bodyParser.json());

app.use(express.static('public'));

// if get home page request, return home page
app.get('/', function (req, res, next) {
  var collection = db.collection('items');
  collection.find({}).toArray(function (err, items) {
    if (err) {
      res.status(500).send({
        error: "Error fetching items from DB"
      });
    } else {
      console.log("== items:", items);
      res.status(200).render('homePage', {
        items: items,
        title: "Tab Market"
      });
    }
  });
});

// if get request for brand items, return page with such items
app.get('/:name', function (req, res, next) {
  var name = req.params.name.toUpperCase();
  var collection = db.collection('items');
  collection.find({ brand: name }).toArray(function (err, items) {
    if (err) {
      res.status(500).send({
        error: "Error fetching items from DB"
      });
    } else {
      console.log("== items:", items);
      res.status(200).render('homePage', {
        items: items,
        title: "Tab Market - " + name
      });
    }
  });
});

// if get easter egg request, return easter egg
app.get('/aiden-sco-ducks', function (req, res, next) {
  res.status(200).render('troll', {
    title: "Troll Market"
  });
});

// if faulty request, return error page
app.get('*', function (req, res, next) {
  res.status(404).render('404', {
    title: "Tab Market"
  });
});

// connect to Mongo database
MongoClient.connect(mongoUrl, function (err, client) {
  if (err) {
    throw err;
  }
  db = client.db(mongoDBName);
  app.listen(port, function () {
    console.log("== Server listening on port", port);
  });
});
