const { PostGenerator } = require("../models/post/PostGenerator");
const { UserGenerator } = require("../models/user/UserGenerator");
const { CommentGenerator } = require("../models/comment/CommentGenerator");

const generate = (params) => {
  const { usersCount } = params;

  const posts = new PostGenerator(params).generate();
  const users = new UserGenerator({ usersCount }).generate();
  const comments = new CommentGenerator(params).generate();

  return {
    posts,
    users,
    comments,
  };
};

module.exports = generate;
