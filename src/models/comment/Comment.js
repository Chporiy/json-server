const { faker } = require("@faker-js/faker");
const { v4: uuidv4 } = require('uuid');

/**
 * @typedef {Object} Constructor
 * @property {string} postId
 * @property {string} userId
 * @property {string} commentId
 * @property {Date} date
 */

class Comment {
  /**
   * @constructor
   * @param {Constructor} params
   */
  constructor({ postId, userId, commentId, date }) {
    this.id = uuidv4();
    this.postId = postId;
    this.userId = userId;
    this.commentId = commentId;
    this.hasChildrenComments = false;
    this.body = faker.lorem.paragraph();
    this.date = faker.date.between(date, new Date());
  }
}

module.exports = { Comment };
