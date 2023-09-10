const { faker } = require("@faker-js/faker");
const { v4: uuidv4 } = require('uuid');

/**
 * @typedef {Object} Constructor
 * @property {string} postId
 * @property {string} userId
 * @property {Date} date
 */

class Comment {
  /**
   * @constructor
   * @param {Constructor} params
   */
  constructor({ postId, userId, date }) {
    this.id = uuidv4();
    this.postId = postId;
    this.userId = userId;
    this.commentIds = [];
    this.body = faker.lorem.paragraph();
    this.date = faker.date.between(date, new Date());
  }

  /**
   * @param {Comment['id'][]} data 
   */
  setInnerCommentsIds(data) {
    this.commentIds = data;
  }
}

module.exports = { Comment };
