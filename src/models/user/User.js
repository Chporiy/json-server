const { faker } = require("@faker-js/faker");

/**
 * @typedef {Object} Constructor
 * @property {number} id
 */
class User {
  /**
   * @constructor
   * @param {Constructor} params 
   */
  constructor({ id }) {
    const fullName = faker.name.fullName();
    const [firstName, lastName] = fullName.split(" ");

    this.id = id;
    this.fullName = fullName;
    this.avatar = faker.image.avatar();
    this.email = faker.internet.email(firstName, lastName);
  }
}

module.exports = { User };
