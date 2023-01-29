const express = require("express");
const { Posts } = require("../models");
const router = express.Router();

router.get("/", async (req, res) => {
  const listsOfPosts = await Posts.findAll();
  res.json(listsOfPosts);
});

router.get("/byId/:id", async (req, res) => {
  const id = req.params.id;
  const post = await Posts.findByPk(id);
  res.json(post);
});

router.post("/", async (req, res) => {
  const post = req.body;
  await Posts.create(post);
  res.json(post);
});

module.exports = router;
