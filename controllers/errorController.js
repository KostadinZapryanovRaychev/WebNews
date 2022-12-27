
const erroView = require("../views/nonFound.js");

module.exports.getError = async (req, res) => {
  const error = erroView.getErrorView();
  res.send(error);
};
