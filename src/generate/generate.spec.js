const generate = require("./generate");

describe("generate()", () => {
  const postsCount = 10;
  const usersCount = 5;
  const commentsCount = 20;
  const params = {
    postsCount,
    usersCount,
    commentsCount,
  }

  describe('post', () => {
    it("should return the passed number of posts", () => {
      expect(generate(params).posts).toHaveLength(postsCount);
    });

    it('should set a random user id between "0" and an "users count - 1"', () => {
      const [ post ] = generate(params).posts;

      expect(post.userId).toBeGreaterThanOrEqual(0);
      expect(post.userId).toBeLessThanOrEqual(usersCount - 1);
    });    
  });

  describe('user', () => {
    it("should return the passed number of users", () => {
      expect(generate(params).users).toHaveLength(usersCount);
    });  
  });

  describe('comment', () => {
    it('should return comments', () => {
      expect(generate(params).comments).toHaveLength(commentsCount);
    });

    it('should set a random post id between "0" and "posts count - 1', () => {
      const [ comment ] = generate(params).comments;

      expect(comment.postId).toBeGreaterThanOrEqual(0);
      expect(comment.postId).toBeLessThanOrEqual(postsCount - 1);
    });
  });
});
