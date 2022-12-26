const homeView = require("../views/home.js");
const newsView = require("../views/articles.js");
const advirtiseView = require("../views/advirtise");
const st = require("../styles");
const config = require("../config.js");
const path = require("path");

const User = require("../models/user");
const News = require("../models/news");
const Advirtise = require("../models/advirtise.js");
const mainContent = homeView.mainHtmlSkeleton;
const style = st.styles();

module.exports.createAdvirtise = async (req, res) => {
  const result = advirtiseView.createAdvirtiseView();
  const loggedUser = req.session.user_id;
  const html = await mainContent(result, style, loggedUser);
  res.send(html);
};

module.exports.createAdvirtisePost = async (req, res) => {
  const { title, content, image, link } = req.body;
  const advirtise = new Advirtise({
    title: title,
    content: content,
    image: image,
    link: link,
  });
  console.log(advirtise);
  await advirtise.save();
  res.redirect("/news");
};

module.exports.getAdvirtise = async (req, res) => {
  const result = advirtiseView.getAdvirtiseView();
  const loggedUser = req.session.user_id;
  const html = await mainContent(result, style, loggedUser);
  res.send(html);
};

module.exports.getAllAdvirtises = async (req, res) => {
  const alladAvirtises = await Advirtise.find({});
  console.log(alladAvirtises);
  const result = advirtiseView.getAllAdvirtisesView(alladAvirtises);
  const loggedUser = req.session.user_id;
  const html = await mainContent(result, style, loggedUser);
  res.send(html);
};

module.exports.deleteAdvirtise = async (req, res) => {
  const { id } = req.params;
  await Advirtise.findByIdAndDelete(id);
  res.redirect("/news");
};
