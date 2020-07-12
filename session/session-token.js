const signature = require("cookie-signature");
const config = require("../config/config");

const sessionToken = (val) => {
  return "s:" + signature.sign(val, config.sessionSecret);
};

module.exports = sessionToken;
