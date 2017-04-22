// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
// var path = require("path");
// var router = express.Router;
// var api = require('./routing/api-routes.js');  
// var html = require('./routing/html-routes.js');  
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
var app = express();
// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 3000;

// BodyParser makes it possible for our server to interpret data sent to it.
// The code below is pretty standard.app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static('./public'));

// app.use('api', router);
// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require("./app/routing/api-routes")(app);
require("./app/routing/html-routes")(app);

// app.use('/', index);  
// app.use('/api', api);  
// app.use('/html', html-routes.js); 
 
      


// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
// app.get("/", function(req, res) {
//   res.sendFile(path.join(__dirname, "view.html"));
// });

// app.get("/", function(req, res) {
//   res.sendFile(path.join(__dirname, "home.html"));

// });

// // Search for Specific Character (or all characters) - provides JSON
// app.get("/api/:characters?", function(req, res) {
//   var chosen = req.params.characters;

//   if (chosen) {
//     console.log(chosen);

//     for (var i = 0; i < characters.length; i++) {
//       if (chosen === characters[i].routeName) {
//        return res.json(characters[i]);
//       }
//     }
//     return res.json(false);
//   }
//   return res.json(characters);
// });

// // Create New Characters - takes in JSON input
// app.post("/api/new", function(req, res) {
//   var newcharacter = req.body;
//   newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();

//   console.log(newcharacter);

//   characters.push(newcharacter);

//   res.json(newcharacter);
// });

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
