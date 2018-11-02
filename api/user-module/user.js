"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, default: "" },
  address: { type: String, default: "" },
  location: {
    type: { type: String, default: "Point" },
    coordinates: { type: Array, required: true }
  },

  role: { type: String, enum: ["USER", "HELPER"] },

  // system generated
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("User", UserSchema);
