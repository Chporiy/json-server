const { faker } = require("@faker-js/faker");
const { ContentGenerator } = require("../../content-generator/ContentGenerator");
const { Comment } = require("./Comment");

class CommentGenerator extends ContentGenerator {
  /**
   * 
   * @param {Object} params
   * @param {import('../post/Post').Post[]} params.posts
   * @param {import('../user/User').User[]} params.users
   * @param {number} params.commentsCount
   */
  constructor({ posts, users, commentsCount }) {
    super(commentsCount);

    this.posts = posts;
    this.users = users;
  }

  /**
   * @returns {import('./Comment').Comment[]}
   */
  generate() {
    const comments = this.entityIds.map((entry, id) => {
      const { id: postId, date: postDate } = faker.helpers.arrayElement(this.posts);
      const { id: userId } = faker.helpers.arrayElement(this.users);

      return this.getComment({
        id,
        postId,
        userId,
        postDate,
      });
    });

    return comments;
  }

  /**
   * 
   * @param {import('./Comment').Constructor} params 
   * @returns {import('./Comment')}
   */
  getComment(params) {
    return new Comment(params);
  }
}

module.exports = { CommentGenerator };
