const mongoose = require("mongoose");

const ActivitySchema = mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
  date: { type: Date },
  updatedAt: { type: Date, default: Date.now },
  tags: [], // mixed type, mongoose doesn't auto detect changes, see docs
  details: {}, // mixed type, mongoose doesn't auto detect changes, see docs
  title: String,
  body: String,
});

module.exports = mongoose.model("Activities", ActivitySchema);
