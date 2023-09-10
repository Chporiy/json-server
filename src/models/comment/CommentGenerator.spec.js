const { Post } = require("../post/Post");
const { User } = require("../user/User");
const { Comment } = require("./Comment");
const { CommentGenerator } = require("./CommentGenerator");

describe("CommentGenerator", () => {
  const users = [new User(), new User()];
  const posts = [
    new Post({ userId: users[0].id }),
    new Post({ userId: users[1].id }),
  ];
  const commentsCount = 20;
  const params = {
    users,
    posts,
    commentsCount,
  };

  /**
   * 
   * @param {import('./Comment').Comment[]} comments 
   */
  const getOriginalAndItsInnerComemnts = (comments) => {
    const originalComment = comments.find(({ commentIds }) => (
      commentIds.length > 0)
    );
    const innerComments = comments.filter(({ id }) => (
      originalComment.commentIds.includes(id))
    );

    return { originalComment, innerComments };
  }


  it('should return comments', () => {
    const generator = new CommentGenerator(params);
    const comments = generator.generate();

    expect(comments).toEqual(expect.any(Array));
    
    comments.forEach((comment) => {
      expect(comment).toBeInstanceOf(Comment);
    });
  });

  it('should generate inner comments with a publication date greater than an original comment', () => {
    const generator = new CommentGenerator(params);
    const comments = generator.generate();
    const { originalComment, innerComments } = getOriginalAndItsInnerComemnts(comments);

    innerComments.forEach((comment) => {
      expect(comment.date.getTime()).toBeGreaterThan(originalComment.date.getTime());
    });
  });

  it('should generate inner comments with same the postId property as original comment', () => {
    const generator = new CommentGenerator(params);
    const comments = generator.generate();
    const { originalComment, innerComments } = getOriginalAndItsInnerComemnts(comments);

    innerComments.forEach((comment) => {
      expect(comment.postId).toEqual(originalComment.postId);
    });
  });
});
