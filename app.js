const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const User = require("./models/user");
const News = require("./models/news");
const bcrypt = require("bcrypt");
const session = require("express-session");
const methodOverride = require("method-override");
const app = express();
const articleController = require("./controllers/articleController");
const userController = require("./controllers/userController");
const passport = require("passport");
const localStrategy = require("passport-local");

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

const sessionConfig = {
  secret: "vidko",
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    expires: Date.now() + 1000 * 60 * 60 * 24,
    maxAge: 1000 * 60 * 60 * 24,
  },
};

app.use(express.urlencoded({ extended: true }));
app.use(session(sessionConfig));
app.use(methodOverride("_method"));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

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

app.get("/news" , articleController.getAllArticles);

app.post("/create", requireLogin, articleController.createArticlePost);

app.get("/create", requireLogin, articleController.createArticle);

app.get("/news/:id", articleController.getArticle);

app.get("/news/:id/edit", requireLogin, articleController.editArticle);

app.put("/news/:id", requireLogin, articleController.editArticlePost);

app.get("/news/:id/delete", requireLogin, articleController.deleteArticle);

app.delete("/news/:id", requireLogin, articleController.deleteArticlePost);

app.get("/news/:id/comments", articleController.addComment);

app.put("/news/:id/comments", articleController.addCommentPost);

app.get("/login", userController.login);

app.post("/login", userController.loginPost);

app.post("/logout", userController.logout);

app.get("/register", userController.register);

app.post("/register", userController.registerPost);

app.get("/", (req, res) => {
  res.redirect("/news");
});
