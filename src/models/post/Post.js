const { faker } = require("@faker-js/faker");

class Post {
  /**
   * @constructor
   * @param {number} id
   * @param {number} maxUserId
   */
  constructor(id, maxUserId) {
    this.id = id;
    this.userId = faker.datatype.number({
      min: 0,
      max: maxUserId,
    });
    this.title = faker.lorem.words(5);
    this.body = faker.lorem.sentence(500);
    this.preview = faker.image.image(1920, 1080);
    this.date = faker.date.recent(7);
  }
}

module.exports = { Post };
