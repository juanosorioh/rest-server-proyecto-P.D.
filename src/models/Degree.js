const mongoose = require("mongoose");

const DegreeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  details: {
    type: String,
    required: true,
  },

  year: {
    type: Date,
    required: true,
  },

  //! buscar como vincular a la coleccion course
});

module.exports = Degree = mongoose.model("degree", DegreeSchema);
