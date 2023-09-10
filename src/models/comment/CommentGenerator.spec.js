const { Post } = require("../post/Post");
const { User } = require("../user/User");
const { CommentGenerator } = require("./CommentGenerator");

describe("CommentGenerator", () => {
  const users = [new User({ id: 0 }), new User({ id: 1 })];
  const posts = [
    new Post({ id: 0, userId: users[0].id }),
    new Post({ id: 1, userId: users[1].id }),
  ];
  const commentsCount = 20;
  const params = {
    users,
    posts,
    commentsCount,
  }

  it('should return comments', () => {
    const generator = new CommentGenerator(params);
    const comments = generator.generate();

    expect(comments).toHaveLength(commentsCount);
  });
});
