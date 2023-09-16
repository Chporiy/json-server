const { v4: uuidv4 } = require("uuid");
const { Comment } = require("./Comment");

const testDate = new Date("2022-01-01");

jest.useFakeTimers().setSystemTime(testDate);

describe('Comment', () => {
  const week = 86400000 * 7;
  const postId = 0;
  const userId = 0;
  const commentId = uuidv4();
  const date = new Date(testDate.getTime() - week);
  const params = {
    postId,
    userId,
    commentId,
    date,
  }

  it('should create an instance', () => {
    const comment = new Comment(params);

    expect(comment).toEqual({
      postId,
      userId,
      commentId,
      id: expect.any(String),
      body: expect.any(String),
      date: expect.any(Date),
      childrenCommentsAmount: 0,
    });
  });

  it('should set a date between passed date and current time', () => {
    const comment = new Comment(params);
    const commentDateAsTimestamp = comment.date.getTime();

    expect(commentDateAsTimestamp).toBeGreaterThanOrEqual(date.getTime());
    expect(commentDateAsTimestamp).toBeLessThanOrEqual(testDate.getTime());
  });

  it('should set children comments amount', () => {
    const comment = new Comment(params);
    const amount = 1;

    comment.setChildrenCommentsAmount(amount);
    
    expect(comment.childrenCommentsAmount).toEqual(amount);
  });
});