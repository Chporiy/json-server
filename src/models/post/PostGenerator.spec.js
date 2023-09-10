const { User } = require("../user/User");
const { PostGenerator } = require("./PostGenerator");

describe('PostGenerator', () => {
  const postsCount = 10;
  const users = [new User({ id: 0 }), new User({ id: 1 })];
  const params = {
    users,
    postsCount,
  }

  it("should return the passed number of posts", () => {
    const generator = new PostGenerator(params);
    const posts = generator.generate();

    expect(posts).toHaveLength(postsCount);
  });
});