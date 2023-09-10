const { ContentGenerator } = require("../../content-generator/ContentGenerator");
const { User } = require("./User");

class UserGenerator extends ContentGenerator {
  /**
   * 
   * @param {Object} params
   * @param {number} params.usersCount
   */
  constructor({ usersCount }) {
    super();

    this.usersCount = usersCount;
  }

  /**
   * @returns {import('./User').User[]}
   */
  generate() {
    const users = this.getFakeEntities(this.usersCount).map(this.getUser);

    return users;
  }

  getUser() {
    return new User();
  }
}

module.exports = { UserGenerator };
