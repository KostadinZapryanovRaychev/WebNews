const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const User = require("./models/user");
const News = require("./models/news");
const bcrypt = require("bcrypt");
const session = require("express-session");
const methodOverride = require("method-override");
const app = express();

mongoose
  .connect("mongodb://localhost:27017/webnews", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Established successfull connection");
  })
  .catch((error) => {
    console.log("Oh no error occured");
    console.log(error);
  });

app.set("views", path.join(__dirname, "views"));

const homeView = require("./views/home.js");
const newsView = require("./views/articles.js");
const config = require("./config.js");

app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: "secret", resave: true, saveUninitialized: true }));
app.use(methodOverride("_method"));

const mainContent = homeView.mainHtmlSkeleton;

// MIDDLEWARE
const requireLogin = (req, res, next) => {
  if (!req.session.user_id) {
    return res.redirect("/login");
  } else {
    next();
  }
};

app.listen(3000, () => {
  console.log("Im listening on port 3000");
});

app.get("/", (req, res) => {
  res.redirect("/login");
});

app.get("/register", (req, res) => {
  const html = homeView.createRegistrationView();
  res.send(html);
});

app.post("/register", async (req, res) => {
  const { email, password, name } = req.body;
  const hashedPass = await bcrypt.hash(password, 12);
  const user = new User({
    email: email,
    password: hashedPass,
    name: name,
  });
  await user.save();
  req.session.user_id = user._id;
  res.send(req.body);
});

app.post("/create", async (req, res) => {
  const { title, author, content , createdAt } = req.body;
  const news = new News({
    title: title,
    author: author,
    content: content,
    createdAt:createdAt
  });
  await news.save();
  res.redirect("/news");
});

app.get("/create", requireLogin, (req, res) => {
  const result = newsView.createNewArticleView()
  const html = mainContent(result);
  res.send(html);
});

app.get("/login", (req, res) => {
  const result = homeView.createLoginView()
  const html = mainContent(result);
  res.send(html);
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  const validPassword = await bcrypt.compare(password, user.password);
  if (validPassword) {
    req.session.user_id = user._id;
    res.redirect("/create");
  } else {
    res.redirect("/login");
  }
});

app.post("/logout", async (req, res) => {
  req.session.user_id = null;
  req.session.destroy();
  res.redirect("/login");
});

app.get("/news", async (req, res) => {
  // SORTING BY DATE MOST RECENT
  const articles = await News.find({}).sort({ createdAt: -1 });
  const result = newsView.createArticleListView(articles, config.dateFormatter)
  const html = mainContent(result);
  res.send(html);
});

app.get("/news/:id", async (req, res) => {
  const article = await News.findById(req.params.id);
  const html = newsView.readArticle(article);
  res.send(html);
});

app.get("/news/:id/edit", requireLogin, async (req, res) => {
  const article = await News.findById(req.params.id);
  const result = newsView.updateArticleView(article);
  const html = mainContent(result)
  res.send(html);
});

app.put("/news/:id", async (req, res) => {
  const { id } = req.params;
  const { title, author, content ,createdAt } = req.body;
  const article = await News.findByIdAndUpdate(id, {
    title: title,
    author: author,
    content: content,
    createdAt: createdAt
  });
  res.redirect("/news");
});

app.get("/news/:id/delete",requireLogin, async (req, res) => {
  const article = await News.findById(req.params.id);
  const result = newsView.deleteArticle(article);
  const html = mainContent(result)
  res.send(html);
});

app.delete("/news/:id", requireLogin, async (req, res) => {
  const { id } = req.params;
  await News.findByIdAndDelete(id);
  res.redirect("/news");
});
