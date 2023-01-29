const express = require("express");
const { Posts } = require("../models");
const router = express.Router();

router.get("/", async (req, res) => {
  const listsOfPosts = await Posts.findAll();
  res.json(listsOfPosts);
});

router.post("/", async (req, res) => {
  const post = req.body;
  await Posts.create(post);
  res.json(post);
});

module.exports = router;
