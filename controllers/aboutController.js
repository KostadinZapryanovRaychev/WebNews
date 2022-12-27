const homeView = require("../views/home.js");
const aboutView = require("../views/about")
const st = require("../styles");

const mainContent = homeView.mainHtmlSkeleton;
const style = st.styles();

module.exports.getAbout = async (req, res) => {
    const about = aboutView.getAboutUsView();
    const loggedUser = req.session.user_id;
    const html = await mainContent(about, style, loggedUser);
    res.send(html);
  };
  