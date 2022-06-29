const generate = require("../src/generate");

describe("generate()", () => {
  const postsCount = 10;
  const usersCount = 5;

  describe("posts", () => {
    it("should return the passed number of posts", () => {
      expect(
        generate({
          postsCount,
          usersCount,
        }).posts
      ).toHaveLength(postsCount);
    });

    it("should return right post", () => {
      const post = generate({
        postsCount,
        usersCount,
      }).posts[0];

      expect(post).toEqual({
        id: 0,
        userId: expect.any(Number),
        title: expect.any(String),
        body: expect.any(String),
        preview: expect.any(String),
        date: expect.any(Date),
      });
      expect(post.title.split(" ")).toHaveLength(5);
      expect(post.userId).toBeGreaterThanOrEqual(1);
      expect(post.userId).toBeLessThanOrEqual(usersCount);
    });
  });

  describe("users", () => {
    it("should return the passed number of users", () => {
      expect(
        generate({
          postsCount,
          usersCount,
        }).users
      ).toHaveLength(usersCount);
    });

    it("should return right user", () => {
      expect(
        generate({
          postsCount,
          usersCount,
        }).users[0]
      ).toEqual({
        id: 0,
        firstName: expect.any(String),
        lastName: expect.any(String),
        avatar: expect.any(String),
        email: expect.any(String),
      });
    });
  });
});
