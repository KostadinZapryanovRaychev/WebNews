const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const User = require("./models/user");
const session = require("express-session");
const methodOverride = require("method-override");
const app = express();

const articleController = require("./controllers/articleController");
const userController = require("./controllers/userController");
const advirtiseController = require("./controllers/advirtiseController");
const abouController = require("./controllers/aboutController");
const errorController = require("./controllers/errorController");

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

//MiDDLEWARE
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

app.get("/news", articleController.getAllArticles);

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

app.get("/advirtise", requireLogin, advirtiseController.createAdvirtise);

app.post("/advirtise", requireLogin, advirtiseController.createAdvirtisePost);

app.get("/advirtises", requireLogin, advirtiseController.getAllAdvirtises);

app.delete(
  "/advirtises/:id",
  requireLogin,
  advirtiseController.deleteAdvirtise
);

app.get("/about", abouController.getAbout);

//ERROR page
app.get("/pavel" , errorController.getError);

app.get("/", (req, res) => {
  res.redirect("/news");
});

