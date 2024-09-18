const express = require('express');
const router = express.Router();
const BlogPost = require('../models/BlogPost');  // MongoDB BlogPost model

// GET all blog posts
router.get('/', async (req, res) => {
  const blogs = await BlogPost.find();
  res.json(blogs);  // Return the blog posts in JSON format
});

// POST a new blog post (if you want to add blog posts from a form)
router.post('/', async (req, res) => {
  const newBlog = new BlogPost(req.body);
  await newBlog.save();
  res.json(newBlog);  // Return the newly created blog post
});

module.exports = router;
