const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  // _id: { type: String },
  email: {
    type: String,
    required: true
  },
  password: { type: String, required: true },
  username: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  age: { type: String, required: true }
});

module.exports = mongoose.model("User", userSchema);
