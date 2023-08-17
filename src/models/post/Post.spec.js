const { Post } = require("./Post");

jest.useFakeTimers().setSystemTime(new Date("2022-01-01"));

describe('Post', () => {
  const maxUsersCount = 5;
  const id = 0;

  it("should create instance", () => {
    const post = new Post(id, maxUsersCount);

    expect(post).toEqual({
      id,
      userId: expect.any(Number),
      title: expect.any(String),
      body: expect.any(String),
      preview: expect.any(String),
      date: expect.any(Date),
    });
    expect(post.title.split(" ")).toHaveLength(5);
    expect(post.userId).toBeGreaterThanOrEqual(0);
    expect(post.userId).toBeLessThanOrEqual(maxUsersCount);
    expect(post.preview).toContain("1920/1080");
    expect(post.body.split(" ")).toHaveLength(500);
  });

  it("should set a date in the recent past", () => {
    const post = new Post(id, maxUsersCount)
    const timestamp = post.date.getTime();
    const week = 86400000 * 7;

    expect(timestamp).toBeGreaterThanOrEqual(Date.now() - week);
    expect(timestamp).toBeLessThanOrEqual(Date.now());
  });
});