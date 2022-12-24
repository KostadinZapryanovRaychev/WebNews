const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const newsSchema = new Schema({
  title: String,
  createdAt: Date,
  author: String,
  content: String,
  comments : [{
    author : String,
    content : String
     }]
});

const News = mongoose.model("News", newsSchema);
module.exports = News;
