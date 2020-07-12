const express = require("express");
const app = express();
const expressSession = require("express-session");
const bodyParser = require("body-parser");

const sessionModify = require("./session/session-modify");
const sessionToken = require("./session/session-token");
const config = require("./config/config");

app.use(sessionModify);
app.use(
  expressSession({
    secret: config.sessionSecret,
    resave: true,
    saveUninitialized: true,
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/login", (req, res) => {
  req.session.userid = req.body.id;
  req.session.userpw = req.body.pw;
  return res.status(200).json({ token: sessionToken(req.sessionID) });
});

app.post("/status", (req, res) => {
  if (req.session.userid) {
    return res.status(200).json({ loggedin: true });
  } else {
    return res.status(401).json({ loggedin: false });
  }
});

app.listen(3000, () => {
  console.log("started");
});

module.exports = app;
