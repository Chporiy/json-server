const { Post } = require("../models/post/Post");
const { User } = require("../models/user/User");

const generate = ({ postsCount, usersCount }) => {
  const maxUserId = usersCount - 1;

  const posts = [...Array(postsCount)].map((entry, i) => (
    new Post(i, maxUserId)
  ));
  const users = [...Array(usersCount)].map((entry, i) => new User(i));

  return {
    posts,
    users,
  };
};

module.exports = generate;
