const { faker } = require("@faker-js/faker");

class Post {
  /**
   * @constructor
   * @param {Object} params
   * @param {number} params.id
   * @param {number} params.userId
   * @param {number[]} params.commentIds
   */
  constructor({ id, userId, commentIds }) {
    this.id = id;
    this.userId = userId;
    this.commentIds = commentIds;
    this.title = faker.lorem.words(5);
    this.body = faker.lorem.sentence(500);
    this.preview = faker.image.image(1920, 1080);
    this.date = faker.date.recent(7);
  }
}

module.exports = { Post };
