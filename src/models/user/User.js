const { faker } = require("@faker-js/faker");

class User {
  /**
   * @constructor
   * @param {number} id 
   */
  constructor(id) {
    const fullName = faker.name.fullName();
    const [firstName, lastName] = fullName.split(" ");

    this.id = id;
    this.fullName = fullName;
    this.avatar = faker.image.avatar();
    this.email = faker.internet.email(firstName, lastName);
  }
}

module.exports = { User };
