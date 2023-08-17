const { faker } = require("@faker-js/faker");
const { Post } = require("../models/post/Post");
const { User } = require("../models/user/User");
const { Comment } = require("../models/comment/Comment");

const generate = ({ postsCount, usersCount, commentsCount }) => {
  const maxUserId = usersCount - 1;
  const maxPostId = postsCount - 1;
  const postIds = [...Array(postsCount)].map((entry, id) => id);
  const userIds = [...Array(usersCount)].map((entry, id) => id);
  const commentIds = [...Array(commentsCount)].map((entry, id) => id);

  const posts = postIds.map((entry, id) => {
    const userId = faker.datatype.number({
      min: 0,
      max: maxUserId,
    });
    const randomCommentIds = faker.helpers.arrayElements(commentIds);    

    return new Post({
      id,
      userId,
      commentIds: randomCommentIds,
    });
  });
  const users = userIds.map((entry, id) => new User(id));
  const comments = commentIds.map((entry, id) => {
    const postId = faker.datatype.number({
      min: 0,
      max: maxPostId,
    });

    return new Comment(id, postId);
  })

  return {
    posts,
    users,
    comments,
  };
};

module.exports = generate;
