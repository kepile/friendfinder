// ===============================================================================
// LOAD DATA
// We are linking our routes to  "data" sources.
// This data source holds array of information on friends available to match
// ===============================================================================
var express = require("express");

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
    // Note the code here. Our "server" will respond to requests with a friend who is a match
    // and store the survey results under a new friend.
    
    // This array will hold the friend matches
    var results = [];

    // Loop through all the friends in the api
    for (var i = 0; i < friends.length; i++) {
      // create this variable to store the total of differences in the answer values
    var total = 0;

    // loop through all the answers for the friend at index i
    // total the abs diff difference in answer values between friend i and the new survey
    for (var s = 0; s < friends[i].answer.length; s++){
      total += Math.abs(friends[i].answer[s] - req.body.answer[s]);
     }
  // if no results have been stored or the total just tallied is the same as the 
  // friend that is stored already, push the new total
     if (results.length <= 0 || total === results[0].total){
      results.push({name: friends[i].name, 
                    photo: friends[i].photo, 
                    total: total});
      } else 
      // else if the new total is less than the results stored in the array,
      // replace the values in storage with the new match because
      // the new total is a better friend match
     if (total < results[0].total){
      results = [{name: friends[i].name, 
                  photo: friends[i].photo, 
                  total: total}
                ];
     }
    }

    // add the new friend and survey to the api object
      friends.push(req.body);
      // respond to the post with the matches found
      res.json(results);
    
  });

  
};
