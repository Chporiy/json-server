const { Comment } = require("./Comment");

describe('Comment', () => {
  it('should create an instance', () => {
    const id = 0;
    const postId = 0;
    const userId = 0;
    const params = {
      id,
      postId,
      userId,
    }
    const comment = new Comment(params);

    expect(comment).toEqual({
      ...params,
      body: expect.any(String),
    });
  });
});