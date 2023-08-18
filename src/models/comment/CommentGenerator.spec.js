const { CommentGenerator } = require("./CommentGenerator");

describe("CommentGenerator", () => {
  const postsCount = 10;
  const usersCount = 5;
  const commentsCount = 20;
  const params = {
    postsCount,
    usersCount,
    commentsCount,
  }

  it('should return comments', () => {
    const generator = new CommentGenerator(params);
    const comments = generator.generate();

    expect(comments).toHaveLength(commentsCount);
  });

  it('should set a random post id between "0" and "posts count - 1', () => {
    const generator = new CommentGenerator(params);
    const [ comment ] = generator.generate();

    expect(comment.postId).toBeGreaterThanOrEqual(0);
    expect(comment.postId).toBeLessThanOrEqual(postsCount - 1);
  });
});
