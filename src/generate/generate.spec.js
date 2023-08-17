const generate = require("./generate");

describe("generate()", () => {
  const postsCount = 10;
  const usersCount = 5;

  it("should return the passed number of posts", () => {
    expect(
      generate({
        postsCount,
        usersCount,
      }).posts
    ).toHaveLength(postsCount);
  });

  it("should return the passed number of users", () => {
    expect(
      generate({
        postsCount,
        usersCount,
      }).users
    ).toHaveLength(usersCount);
  });
});
