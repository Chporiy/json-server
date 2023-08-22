const { faker } = require("@faker-js/faker");

/**
 * @typedef {Object} Constructor
 * @property {number} id
 * @property {number} postId
 * @property {number} userId
 * @property {Date} postDate
 */

class Comment {
  /**
   * @constructor
   * @param {Constructor} params
   */
  constructor({ id, postId, userId, postDate }) {
    this.id = id;
    this.postId = postId;
    this.userId = userId;
    this.body = faker.lorem.paragraph();
    this.date = faker.date.between(postDate, new Date());
  }
}

module.exports = { Comment };
