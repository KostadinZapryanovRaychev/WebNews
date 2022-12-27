const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const newsSchema = new Schema({
  title: String,
  createdAt: Date,
  author: String,
  content: String,
  comments: {
    type: [
      {
        author: String,
        content: String,
      },
    ],
    validate: [arrayLimit, "{PATH} exceeds the limit of 100"],
  },
  image: String,
  category: String,
});

function arrayLimit(val) {
  return val.length <= 100;
}

const News = mongoose.model("News", newsSchema);
module.exports = News;
