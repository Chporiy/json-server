const { Comment } = require("./Comment");

const testDate = new Date("2022-01-01");

jest.useFakeTimers().setSystemTime(testDate);

describe('Comment', () => {
  const week = 86400000 * 7;
  const id = 0;
  const postId = 0;
  const userId = 0;
  const postDate = new Date(testDate.getTime() - week);
  const params = {
    id,
    postId,
    userId,
    postDate,
  }

  it('should create an instance', () => {
    const comment = new Comment(params);

    expect(comment).toEqual({
      id,
      postId,
      userId,
      body: expect.any(String),
      date: expect.any(Date),
    });
  });

  it('should set a date between post date and current time', () => {
    const comment = new Comment(params);
    const commentDateAsTimestamp = comment.date.getTime();

    expect(commentDateAsTimestamp).toBeGreaterThanOrEqual(postDate.getTime());
    expect(commentDateAsTimestamp).toBeLessThanOrEqual(testDate.getTime());
  });
});