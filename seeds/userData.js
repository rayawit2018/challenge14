const { BlogPost } = require("../models");

const blogpostData = [
  {
    username: "Atsede123",
    password: "password2022",
  },
  {
    username: "kiros123",
    password: "password2023",
  },
  {
    username: "siba123",
    password: "password12345",
  },
];

const seedBlogPosts = () => BlogPost.bulkCreate(blogpostData);

module.exports = seedBlogPosts;
