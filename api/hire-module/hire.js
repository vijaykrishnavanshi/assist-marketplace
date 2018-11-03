"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HireSchema = new Schema({
  client: { type: Schema.ObjectId, ref: "User", required: true },
  helper: { type: Schema.ObjectId, ref: "User", required: true },
  start: { type: Date, required: true },
  end: { type: Date, required: true },
  status: {
    type: String,
    enum: ["REQUESTED", "ACCEPTED", "REFUSED"],
    default: "REQUESTED"
  },

  // system generated
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("User", HireSchema);
