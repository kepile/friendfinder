// ===============================================================================
// LOAD DATA
// We are linking our routes to  "data" sources.
// This data source holds array of information on friends available to match
// ===============================================================================

var friends = require("../data/friends");
var bodyParser = require("body-parser");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the JavaScript array
 // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
   console.log("posting file line 34")
   
   console.log("line 36 " + req.body);
   console.log("line 37 " + friends.length);
   var results = [];
   for (var i = 0; i < friends.length; i++) {
    var total = 0;

      console.log(friends[i].name + "line 42");
    for (var s = 0; s < friends[i].answer.length; s++){
      console.log("friend " + friends[i].answer[s].value + " new " + req.body.value[s]);
      console.log(friends[i].answer[s].value-newfriend.value[s]);
      total += Math.abs(friends[i].answer[s].value - req.body.value[s]);
     }
     console.log("line 48 total " + total);
     if (results.length <= 0 || total === results[0].total){
      results.push({name: friends[i].name, 
                    photo: friends[i].photo, 
                    total: total});
      } else 
     if (total < results[0].total){
      results = [{name: friends[i].name, 
                  photo: friends[i].photo, 
                  total: total}
                ];
     }
    }
      friends.push(req.body);
      res.json(results);
    
  });

  
};
