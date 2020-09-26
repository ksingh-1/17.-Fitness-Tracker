const db = require("../models");

module.exports = app => {

    app.get("/api/workouts", (req, res) => {
        db.workout.find({})
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.json(err);
            })
    });

    app.get("/api/workouts/range", (req, res) => {
        db.workout.find(req.body)
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.json(err);
            })
    });

    app.put("/api/workouts/:id", (req, res) => {
        const { id } = req.params;
        db.workout.updateOne({ _id: id },
            { $push: { exercises: req.body } })
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.json(err);
            });
    });

    app.post("/api/workouts", (req, res) => {
        db.workout.create(req.body)
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.json(err);
            })
    });
};