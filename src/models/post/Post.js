const { faker } = require("@faker-js/faker");
const { v4: uuidv4 } = require("uuid");

/**
 * @typedef {Object} Constructor
 * @property {string} params.userId
 */

class Post {
  /**
   * @constructor
   * @param {Constructor} params
   */
  constructor({ userId }) {
    this.id = uuidv4();
    this.userId = userId;
    this.title = faker.lorem.words(5);
    this.body = faker.lorem.sentence(500);
    this.preview = faker.image.image(1920, 1080);
    this.date = faker.date.recent(7);
  }
}

module.exports = { Post };
