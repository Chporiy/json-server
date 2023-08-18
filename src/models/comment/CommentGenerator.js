const { faker } = require("@faker-js/faker");
const { ContentGenerator } = require("../../content-generator/ContentGenerator");
const { Comment } = require("./Comment");

class CommentGenerator extends ContentGenerator {
  /**
   * 
   * @param {Object} params
   * @param {number} params.postsCount
   * @param {number} params.usersCount
   * @param {number} params.commentsCount
   */
  constructor({ postsCount, usersCount, commentsCount }) {
    super(commentsCount);

    this.postsCount = postsCount;
    this.usersCount = usersCount;
  }

  /**
   * @returns {import('./Comment').Comment[]}
   */
  generate() {
    const postIds = this.getEntityIds(this.postsCount);
    const userIds = this.getEntityIds(this.usersCount);
    const comments = this.entityIds.map((entry, id) => {
      const postId = faker.helpers.arrayElement(postIds);
      const userId = faker.helpers.arrayElement(userIds);

      return this.getComment({
        id,
        postId,
        userId,
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
