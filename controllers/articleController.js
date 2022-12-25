const homeView = require("../views/home.js");
const newsView = require("../views/articles.js");
const config = require("../config.js");
const path = require("path");

const User = require("../models/user");
const News = require("../models/news");
const mainContent = homeView.mainHtmlSkeleton;

module.exports.createArticle = async (req, res) => {
  const result = newsView.createNewArticleView();
  const html = await mainContent(result);
  res.send(html);
};

module.exports.createArticlePost = async (req, res) => {
  const { title, author, content, createdAt, image } = req.body;
  const news = new News({
    title: title,
    author: author,
    content: content,
    createdAt: createdAt,
    image: image,
  });
  await news.save();
  res.redirect("/news");
};

module.exports.getAllArticles = async (req, res) => {
  // SORTING BY DATE MOST RECENT
  const articles = await News.find({}).sort({ createdAt: -1 });
  const result = newsView.createArticleListView(articles, config.dateFormatter);
  const html = mainContent(result);
  res.send(html);
};

module.exports.getArticle = async (req, res) => {
  const article = await News.findById(req.params.id);
  const html = newsView.readArticle(article);
  res.send(html);
};

module.exports.editArticle = async (req, res) => {
  const article = await News.findById(req.params.id);
  const result = newsView.updateArticleView(article);
  const html = mainContent(result);
  res.send(html);
};

module.exports.editArticlePost = async (req, res) => {
  const { id } = req.params;
  const { title, author, content, createdAt, image } = req.body;
  const article = await News.findByIdAndUpdate(id, {
    title: title,
    author: author,
    content: content,
    createdAt: createdAt,
    image: image,
  });
  res.redirect("/news");
};

module.exports.deleteArticle = async (req, res) => {
  const article = await News.findById(req.params.id);
  const result = newsView.deleteArticle(article);
  const html = mainContent(result);
  res.send(html);
};

module.exports.deleteArticlePost = async (req, res) => {
  const { id } = req.params;
  await News.findByIdAndDelete(id);
  res.redirect("/news");
};

module.exports.addComment = async (req, res) => {
  const article = await News.findById(req.params.id);
  const html = newsView.readArticleWithComments(article);
  res.send(html);
};

module.exports.addCommentPost = async (req, res) => {
  const { id } = req.params;
  const { author, content } = req.body;

  // Find the article and update the comments array
  const article = await News.findByIdAndUpdate(
    id,
    {
      $push: {
        comments: {
          author: author,
          content: content,
        },
      },
    },
    { new: true }
  );

  res.redirect(`/news/${id}`);
};
