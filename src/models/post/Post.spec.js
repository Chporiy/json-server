const { Post } = require("./Post");

jest.useFakeTimers().setSystemTime(new Date("2022-01-01"));

describe('Post', () => {
  const userId = 0;
  const id = 0;
  const commentIds = [0, 1, 2];
  const params = {
    id,
    userId,
    commentIds,
  };

  it("should create an instance", () => {
    const post = new Post(params);

    expect(post).toEqual({
      ...params,
      title: expect.any(String),
      body: expect.any(String),
      preview: expect.any(String),
      date: expect.any(Date),
    });
    expect(post.title.split(" ")).toHaveLength(5);
    expect(post.preview).toContain("1920/1080");
    expect(post.body.split(" ")).toHaveLength(500);
  });

  it("should set a date in the recent past", () => {
    const post = new Post(params);
    const timestamp = post.date.getTime();
    const week = 86400000 * 7;

    expect(timestamp).toBeGreaterThanOrEqual(Date.now() - week);
    expect(timestamp).toBeLessThanOrEqual(Date.now());
  });
});