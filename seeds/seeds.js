const sequelize = require("../config/connection");

const seedUsers = require("./userData.js");
const seedBlogPosts = require("./blogData.js");
const seedComments = require("./commentData.js");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");

  await seedUsers();
  console.log("\n----- USERS SEEDED -----\n");

  await seedBlogPosts();
  console.log("\n----- BLOG POSTS SEEDED -----\n");

  await seedComments();
  console.log("\n----- COMMENTS SEEDED -----\n");

  process.exit(0);
};

seedDatabase();
