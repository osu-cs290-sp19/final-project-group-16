var fs = require('fs');
var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;

var app = express();
var port = process.env.PORT || 3000;

// mongo log in info
var mongoHost = process.env.MONGO_HOST || "classmongo.engr.oregonstate.edu";
var mongoPort = process.env.MONGO_PORT || 27017;
var mongoUser = process.env.MONGO_USER || "cs290_maithe";
var mongoPassword = process.env.MONGO_PASSWORD || "cs290_maithe";
var mongoDBName = process.env.MONGO_DB_NAME || "cs290_maithe";

var mongoUrl = `mongodb://${mongoUser}:${mongoPassword}@${mongoHost}:${mongoPort}/${mongoDBName}`;
var db = null;

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(bodyParser.json());

app.use(express.static('public'));

// if get normal request, return home page
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
