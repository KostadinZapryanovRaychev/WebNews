const homeView = require("../views/home.js");
const newsView = require("../views/articles.js");
const st = require("../styles");
const config = require("../config.js");
const path = require("path");
const advirtiseView = require("../views/advirtise");

const User = require("../models/user");
const News = require("../models/news");
const Advirtise = require("../models/advirtise");
const mainContent = homeView.mainHtmlSkeleton;
const style = st.styles();

module.exports.createArticle = async (req, res) => {
  const result = newsView.createNewArticleView();
  const loggedUser = req.session.user_id;
  const html = await mainContent(result, style, loggedUser);
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
  const alladAvirtises = await Advirtise.find({})
  const firsTAdvirtise = alladAvirtises[0];
  const loggedUser = req.session.user_id;
  const advirtises = advirtiseView.getAdvirtiseView(firsTAdvirtise);
  const result = newsView.createArticleListView(
    articles,
    config.dateFormatter,
    loggedUser
  );
  const html = mainContent(result, style, loggedUser, advirtises);
  res.send(html);
};

module.exports.getArticle = async (req, res) => {
  const article = await News.findById(req.params.id);
  const html = newsView.readArticle(article);
  res.send(html);
};

module.exports.editArticle = async (req, res) => {
  const article = await News.findById(req.params.id);
  const loggedUser = req.session.user_id;
  const result = newsView.updateArticleView(article, loggedUser);
  const html = mainContent(result, style);
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
  const loggedUser = req.session.user_id;
  const html = mainContent(result, style, loggedUser);
  res.send(html);
};

module.exports.deleteArticlePost = async (req, res) => {
  const { id } = req.params;
  await News.findByIdAndDelete(id);
  res.redirect("/news");
};

module.exports.addComment = async (req, res) => {
  const article = await News.findById(req.params.id);
  const loggedUser = req.session.user_id;
  const html = newsView.readArticleWithComments(article);
  const result = mainContent(html, style, loggedUser);
  res.send(result);
};

module.exports.addCommentPost = async (req, res) => {
  const { id } = req.params;
  const { author, content } = req.body;

  const article = await News.findById(id);

  if (article.comments.length <= 99) {
    const updatedArticle = await News.findByIdAndUpdate(
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
  } else {
    res.redirect(`/news/${id}`);
  }

};
