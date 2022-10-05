const { BlogPost } = require("../models");

const blogpostData = [
  {
    blog_title: "My first post",
    description: "This is the content of post 1",
    user_id: 1,
  },
  {
    blog_title: "My second post",
    description: "This is the content of post one from user 2",
    user_id: 2,
  },
  {
    blog_title: "Another post",
    description: "this is a third post with no comments",
    user_id: "3",
  },
];

const seedBlogPosts = () => BlogPost.bulkCreate(blogpostData);

module.exports = seedBlogPosts;
