
//Package path to retrieve Correct Directory
const path = require("path");

module.exports = app => { // when "countinue Workout" or "new Workout" is clicked in index.html
//If either "New Workout" or "Continue Workout" are clicked send file to respective html's
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"))
    });

    app.get("/exercise", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/exercise.html"))
    });
// stats file
    app.get("/stats", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/stats.html"))
    });
}
