const { faker } = require("@faker-js/faker");

/**
 * @typedef {Object} Constructor
 * @property {number} id
 * @property {number} postId
 * @property {number} userId
 */

class Comment {
  /**
   * @constructor
   * @param {Constructor} params
   */
  constructor({ id, postId, userId }) {
    this.id = id;
    this.postId = postId;
    this.userId = userId;
    this.body = faker.lorem.paragraph();    
  }
}

module.exports = { Comment };
