const mongoose = require("mongoose");

const UnitSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },
  points: {
    type: Number,
    required: true
  },
  category_id: {
    type: Number,
    required: true
  },
  img_path: {
    type: String,
    trim: true,
    required: true
  }
});

module.exports = mongoose.model("Unit", UnitSchema);
