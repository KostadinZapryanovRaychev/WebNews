const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const advirtiseSchema = new Schema({
  title: String,
  content: String,
  image: String,
  link: String,
});

const Advirtise = mongoose.model("Advirtise", advirtiseSchema);
module.exports = Advirtise;
