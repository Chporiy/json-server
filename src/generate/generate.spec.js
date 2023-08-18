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

  it('should return data', () => {
    const data = generate(params);

    expect(data).toEqual({
      posts: expect.any(Array),
      users: expect.any(Array),
      comments: expect.any(Array),
    });
  });
});
