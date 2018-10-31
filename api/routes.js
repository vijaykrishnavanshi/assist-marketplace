"use strict";

/*
 * This file imports all the required controllers
 */

const express = require("express");
const app = express();

const UserRoute = require("./user-module/user.route");

app.use(UserRoute);

module.exports = app;
