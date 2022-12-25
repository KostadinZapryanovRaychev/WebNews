const homeView = require("../views/home.js");
const bcrypt = require("bcrypt");

const User = require("../models/user");
const mainContent = homeView.mainHtmlSkeleton;

module.exports.login = (req, res) => {
  const result = homeView.createLoginView();
  const html = mainContent(result);
  res.send(html);
};

module.exports.loginPost = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  const validPassword = await bcrypt.compare(password, user.password);
  if (validPassword) {
    req.session.user_id = user._id;
    res.redirect("/create");
  } else {
    res.redirect("/login");
  }
};

module.exports.logout = async (req, res) => {
  req.session.user_id = null;
  req.session.destroy();
  res.redirect("/login");
};

module.exports.register = (req, res) => {
  // To add mainDoCType
  const html = homeView.createRegistrationView();
  res.send(html);
};

module.exports.registerPost = async (req, res) => {
  const { email, password, name } = req.body;
  const hashedPass = await bcrypt.hash(password, 12);
  const user = new User({
    email: email,
    password: hashedPass,
    name: name,
  });
  await user.save();
  req.session.user_id = user._id;
  res.redirect("/news");
};
