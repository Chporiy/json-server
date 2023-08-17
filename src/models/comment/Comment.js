const { faker } = require("@faker-js/faker");

class Comment {
  /**
   * @constructor
   * @param {Object} params
   * @param {number} params.id
   * @param {number} params.postId
   * @param {number} params.userId
   */
  constructor({ id, postId, userId }) {
    this.id = id;
    this.postId = postId;
    this.userId = userId;
    this.body = faker.lorem.paragraph();    
  }
}

module.exports = { Comment };
