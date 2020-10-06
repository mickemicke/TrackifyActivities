const mongoose = require("mongoose");
const dayjs = require("dayjs");

const ActivitySchema = mongoose.Schema({
  createdAt: {
    type: String,
    default: new Date().toISOString(),
    required: true,
  },
  date: { type: String, required: true, default: dayjs().format("YYYY-MM-DD") },
  updatedAt: { type: String, default: new Date().toISOString() },
  tags: [], // mixed type, mongoose doesn't auto detect changes, see docs
  details: {}, // mixed type, mongoose doesn't auto detect changes, see docs
  title: String,
  body: String,
  username: {
    type: String,
    required: true,
  },
});

ActivitySchema.pre("findOneAndUpdate", async (next) => {
  // updates updatedAt to current timestamp when editing document
  const newDate = new Date().toISOString();
  await this.updateOne(this._conditions, { updatedAt: newDate }); // eslint-disable-line
  next();
});

module.exports = mongoose.model("Activities", ActivitySchema);
