const express = require("express");
const { Users } = require("../models");
const bcrypt = require("bcrypt");
const router = express.Router();

router.post("/", async (req, res) => {
  const { username, password } = req.body;
  bcrypt.hash(password, 10).then((hash) => {
    Users.create({
      username: username,
      password: hash,
    });
    res.json("SUCCESS");
  });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await Users.findOne({
    where: {
      username: username,
    },
  });

  if (!user) res.json({ error: "User Doesn't Exists!" });

  bcrypt.compare(password, user.password).then((match) => {
    if (!match) res.json({ error: "Wrong Username and Password Combination" });
    res.json("YOU LOGGED IN!!!");
  });
});

module.exports = router;
