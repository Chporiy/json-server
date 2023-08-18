const { PostGenerator } = require("./PostGenerator");

describe('PostGenerator', () => {
  const postsCount = 10;
  const usersCount = 5;
  const params = {
    postsCount,
    usersCount,
  }

  it("should return the passed number of posts", () => {
    const generator = new PostGenerator(params);
    const posts = generator.generate();

    expect(posts).toHaveLength(postsCount);
  });

  it('should set a random user id between "0" and an "users count - 1"', () => {
    const generator = new PostGenerator(params);
    const [ post ] = generator.generate();

    expect(post.userId).toBeGreaterThanOrEqual(0);
    expect(post.userId).toBeLessThanOrEqual(usersCount - 1);
  });
});