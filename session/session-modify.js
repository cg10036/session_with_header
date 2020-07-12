const express = require("express");
const config = require("../config/config");

const sessionModify = (req, res, next) => {
  if (req.headers[config.headerName]) {
    if (!req.cookies) {
      req.cookies = {};
    }
    req.cookies["connect.sid"] = req.headers[config.headerName];
  }
  next();
};

module.exports = sessionModify;
