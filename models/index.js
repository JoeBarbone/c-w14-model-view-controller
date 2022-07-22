// import models
const User = require("./User");
const Post = require("./Post");
//const Category = require("./Category");


// add associations, examples below

//User have many posts
User.hasMany(Post, {
    foreignKey: "user_id"
});
//Posts belongsTo user
Post.belongsTo(User);




module.exports = {
  User,
  Post
};
