const express = require("express");

const router = express.Router();
const userRoutes = require("./users/index");
const login = require("./auth/login");
const logout = require("./auth/logout");
const register = require("./auth/register");
const authcheck = require("./auth/authcheck");
const graphql = require("./graphql");

// define the home page route
router.get("/", (req, res) => {
  res.send("api");
});
router.use("/users", userRoutes);
router.use("/login", login);
router.use("/logout", logout);
router.use("/register", register);
router.use("/authcheck", authcheck);
router.use("/graphql", graphql);

module.exports = router;
