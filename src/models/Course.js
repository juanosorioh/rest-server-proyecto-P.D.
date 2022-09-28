const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  note: {
    type: String,
    required: true,
  },

  attendance: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  alert: [{},{}]
});

module.exports = Course = mongoose.model("course", CourseSchema);
