const { faker } = require("@faker-js/faker");
const { ContentGenerator } = require("../../content-generator/ContentGenerator");
const { Comment } = require("./Comment");

const MAX_COMMENTS_BY_COMMENT = Number(process.env.MAX_COMMENTS_BY_COMMENT);

class CommentGenerator extends ContentGenerator {
  /**
   * 
   * @param {Object} params
   * @param {import('../post/Post').Post[]} params.posts
   * @param {import('../user/User').User[]} params.users
   * @param {number} params.commentsCount
   */
  constructor({ posts, users, commentsCount }) {
    super();

    this.commentsCount = commentsCount;
    this.posts = posts;
    this.users = users;
  }

  /**
   * @returns {import('./Comment').Comment[]}
   */
  generate() {
    const comments = this.getFakeEntities(this.commentsCount).map(() => {
      const { id: postId, date: postDate } = this.getRandomPost();
      const { id: userId } = this.getRandomUser();
      const comment = this.getComment({
        userId,
        postId,
        commentId: "",
        date: postDate,
      });
      const innerComments = this.generateInnerComments({
        postId,
        commentId: comment.id,
        commentDate: comment.date
      });
      
      comment.hasChildrenComments = true;

      return [comment, ...innerComments];
    });

    return comments.flat();
  }

  getRandomPost() {
    return faker.helpers.arrayElement(this.posts);
  }

  getRandomUser() {
    return faker.helpers.arrayElement(this.users);
  }

  getRandomAmountInnerComments() {
    return faker.datatype.number(MAX_COMMENTS_BY_COMMENT);
  }

  /**
   * @param {Object} params
   * @param {import('../post/Post').Post['id']} params.postId
   * @param {import('./Comment').Comment['id']} params.commentId
   * @param {import('./Comment').Comment['date']} params.commentDate
   * @return {import('./Comment').Comment[]}
   */
  generateInnerComments({ postId, commentId, commentDate }) {
    const amount = this.getRandomAmountInnerComments();
    const comments = this.getFakeEntities(amount).map(() => {
      const { id: userId } = this.getRandomUser();

      return this.getComment({
        userId,
        postId,
        commentId,
        date: commentDate,
      })
    });

    return comments;
  }

  /**
   * @param {import('./Comment').Constructor} params 
   * @returns {import('./Comment').Comment}
   */
  getComment(params) {
    return new Comment(params);
  }
}

module.exports = { CommentGenerator };
