const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PodcastSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true },
  title: { type: String, required: true },
  date: { type: Date, required: true, default: Date.now },
  link: { type: String, required: true },
  size: { type: Number, required: true, min: 0 },
  channel: { type: Schema.Types.ObjectId, ref: "channels", required: true },
  description: { type: String, required: true },
});

module.exports = mongoose.model("podcasts", PodcastSchema);
