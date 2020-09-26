var db = require("../models");

module.exports = function (app) {

    //Get Last Workout API
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
            .then(workout => {
                res.json(workout);
            })
            .catch(err => {
                res.json(err);
            });
    });

    //New Workout Added To DB
    app.post("/api/workouts", async (req, res) => {
        try {
            const response = await db.Workout.create({ type: "workout" })
            res.json(response);
        }
        catch (err) {
            console.log("error occurred creating a workout: ", err)
        }
    })

    //New Workout Created
    app.put("/api/workouts/:id", ({ body, params }, res) => {
        console.log(body, params)
        const workoutId = params.id;
        let savedExercises = [];

        //All Saved Workouts Printed
        db.Workout.find({ _id: workoutId })
            .then(dbWorkout => {
                console.log(dbWorkout)
                savedExercises = dbWorkout[0].exercises;
                res.json(dbWorkout[0].exercises);
                let allExercises = [...savedExercises, body]
                console.log(allExercises)
                updateWorkout(allExercises)
            })
            .catch(err => {
                res.json(err);
            });
        //Current Workout Code UPdated
        function updateWorkout(exercises) {
            db.Workout.findByIdAndUpdate(workoutId, { exercises: exercises }, function (err, doc) {
                if (err) {
                    console.log(err)
                }
            })
        }
    })

    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({})
            .then(workout => {
                res.json(workout);
            })
            .catch(err => {
                res.json(err);
            });
    });
};