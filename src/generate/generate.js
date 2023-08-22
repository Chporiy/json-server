const { PostGenerator } = require("../models/post/PostGenerator");
const { UserGenerator } = require("../models/user/UserGenerator");
const { CommentGenerator } = require("../models/comment/CommentGenerator");

const generate = ({ postsCount, usersCount, commentsCount }) => {
  const users = new UserGenerator({ usersCount }).generate();
  const posts = new PostGenerator({ postsCount, users }).generate();
  const comments = new CommentGenerator({
    commentsCount,
    posts,
    users
  }).generate();

  return {
    posts,
    users,
    comments,
  };
};

module.exports = generate;
