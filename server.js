//SET UP THE SERVER TO LISTEN AT A PORT 
// INCLUDE DEPENDENCIES AND ROUTING FILES

// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");

// var router = express.Router;

// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
var app = express();
// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 3000;

// BodyParser makes it possible for our server to interpret data sent to it.
// The code below is pretty standard.app.use(bodyParser.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
// app.use(express.static('./public'));
app.use(express.static("app/public/assets/images"));
app.use(express.static("app/public/assets/css"));
//app.use(express.static("./app/public/assets/css"));
// app.use('api', router);
// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require("./app/routing/api-routes")(app);
require("./app/routing/html-routes")(app);




// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
