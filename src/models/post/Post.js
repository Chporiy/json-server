const { faker } = require("@faker-js/faker");

/**
 * @typedef {Object} Constructor
 * @property {number} params.id
 * @property {number} params.userId
 */

class Post {
  /**
   * @constructor
   * @param {Constructor} params
   */
  constructor({ id, userId }) {
    this.id = id;
    this.userId = userId;
    this.title = faker.lorem.words(5);
    this.body = faker.lorem.sentence(500);
    this.preview = faker.image.image(1920, 1080);
    this.date = faker.date.recent(7);
  }
}

module.exports = { Post };
