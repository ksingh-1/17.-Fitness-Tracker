const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema(

  {
    day: {
      type: Date,
      default: Date.now
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: "What Type Of Exercise Is This?"
        },
        name: {
          type: String,
          trim: true,
          required: "Enter A Workout Routine Name"
        },
        duration: {
          type: Number,
          required: "Enter An Amount Of Time For A Workout"
        },
        weight: {
          type: Number
        },
        reps: {
          type: Number
        },
        sets: {
          type: Number
        },
        distance: {
          type: Number
        }
      }
    ]
  },
  {
    toJSON: {
      // include virtual properties when data is requested
      virtuals: true
    }
  }
);

// adds a dynamically-created property to schema
workoutSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;