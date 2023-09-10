const { faker } = require("@faker-js/faker");
const { v4: uuidv4 } = require('uuid');

/**
 * @typedef {Object} Constructor
 * @property {string} postId
 * @property {string} userId
 * @property {Date} postDate
 */

class Comment {
  /**
   * @constructor
   * @param {Constructor} params
   */
  constructor({ postId, userId, postDate }) {
    this.id = uuidv4();
    this.postId = postId;
    this.userId = userId;
    this.body = faker.lorem.paragraph();
    this.date = faker.date.between(postDate, new Date());
  }
}

module.exports = { Comment };
