const homeView = require("../views/home.js");
const bcrypt = require("bcrypt");
const st = require("../styles");

const User = require("../models/user");
const mainContent = homeView.mainHtmlSkeleton;
const style = st.styles();


module.exports.login = (req, res) => {
  const result = homeView.createLoginView();
  const loggedIn = req.session.user_id;
  const html = mainContent(result, style,loggedIn);
  res.send(html);
};

module.exports.loginPost = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    res.redirect("/login");
  } else {
    const validPassword = await bcrypt.compare(password, user.password);
    if (validPassword) {
      req.session.user_id = user._id;
      res.redirect("/create");
    } else {
      res.redirect("/login");
    }
  }
};

module.exports.logout = async (req, res) => {
  req.session.user_id = null;
  req.session.destroy();
  await res.redirect("/news");
};

module.exports.register = (req, res) => {
  const result = homeView.createRegistrationView();
  const html = mainContent(result, style);
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
