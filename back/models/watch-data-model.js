const mongoose = require("mongoose");

const watchSchema = new mongoose.Schema({
  heartRate: {
    type: String,
    required: true
  },

  bloodPressure: { type: String, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true }
});

module.exports = mongoose.model("watchData", watchSchema);
