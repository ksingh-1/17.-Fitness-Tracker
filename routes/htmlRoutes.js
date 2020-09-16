//Package path to retrieve Correct Directory
var path = require("path");

module.exports = function (app) {
  // when "countinue Workout" or "new Workout" is clicked in index.html
  //If either "New Workout" or "Continue Workout" are clicked send file to respective html's
  app.get("/exercise", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });
  // stats file
  app.get("/stats", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });
};