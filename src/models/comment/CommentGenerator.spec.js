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
   * @param {import('./Comment').Comment[]} comments 
   */
  const getPrimaryAndItsInnerComemnts = (comments) => {
    const primaryComment = comments.find(({ commentId }) => (
        commentId === ""
      )
    );
    const innerComments = comments.filter(({ commentId }) => (
      commentId === primaryComment.id
    ));

    return { primaryComment, innerComments };
  }


  it('should return comments', () => {
    const generator = new CommentGenerator(params);
    const comments = generator.generate();

    expect(comments).toEqual(expect.any(Array));
    
    comments.forEach((comment) => {
      expect(comment).toBeInstanceOf(Comment);
    });
  });

  it('should generate inner comments with a publication date greater than an primary comment', () => {
    const generator = new CommentGenerator(params);
    const comments = generator.generate();
    const { primaryComment, innerComments } = getPrimaryAndItsInnerComemnts(comments);

    innerComments.forEach((comment) => {
      expect(comment.date.getTime()).toBeGreaterThan(primaryComment.date.getTime());
    });
  });

  it('should generate inner comments with same the postId property as primary comment', () => {
    const generator = new CommentGenerator(params);
    const comments = generator.generate();
    const { primaryComment, innerComments } = getPrimaryAndItsInnerComemnts(comments);

    innerComments.forEach((comment) => {
      expect(comment.postId).toEqual(primaryComment.postId);
    });
  });

  it(
    'should generate a primary comment with childrenCommentAmount property equal to innerComments amount',
    () => {
      const generator = new CommentGenerator(params);
      const comments = generator.generate();
      const { primaryComment, innerComments } = getPrimaryAndItsInnerComemnts(comments);

      expect(primaryComment.childrenCommentsAmount).toEqual(innerComments.length);
    }
  );
});
