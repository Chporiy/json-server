const { faker } = require("@faker-js/faker");
const { v4: uuidv4 } = require('uuid');

class User {
  /**
   * @constructor
   */
  constructor() {
    const fullName = faker.name.fullName();
    const [firstName, lastName] = fullName.split(" ");

    this.id = uuidv4();
    this.fullName = fullName;
    this.avatar = faker.image.avatar();
    this.email = faker.internet.email(firstName, lastName);
  }
}

module.exports = { User };
