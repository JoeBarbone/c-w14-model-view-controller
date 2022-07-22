const sequelize = require('../config/connection');
const { Post } = require('../models');

const postdata = [
  {
    title: "Steve Jobs Create Apple!",
    post_content: "Apple computer is an official company now thanks to Steve Jobs.",
    user_id: 1
  },
  {
    title: "Jobs and Wozniak WOW the CES Show!",
    post_content: "This was the demo to end all demos. Fantastic display, great energy and even greater product release updates!",
    user_id: 2
  }
];

const seedPosts = () => Post.bulkCreate(postdata, {individualHooks: true});

module.exports = seedPosts;