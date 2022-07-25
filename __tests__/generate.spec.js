const generate = require("../src/generate");

jest.useFakeTimers().setSystemTime(new Date("2022-01-01"));

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
      expect(post.userId).toBeGreaterThanOrEqual(0);
      expect(post.userId).toBeLessThanOrEqual(usersCount - 1);
      expect(post.preview).toContain("1920/1080");
      expect(post.body.split(" ")).toHaveLength(500);
    });

    it("should return a date in the recent past", () => {
      const { date } = generate({
        postsCount,
        usersCount,
      }).posts[0];
      const timestamp = date.getTime();
      const week = 86400000 * 7;

      expect(timestamp).toBeGreaterThanOrEqual(Date.now() - week);
      expect(timestamp).toBeLessThanOrEqual(Date.now());
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
