const { ContentGenerator } = require("../../content-generator/ContentGenerator");
const { User } = require("./User");

class UserGenerator extends ContentGenerator {
  /**
   * 
   * @param {Object} params
   * @param {number} params.usersCount
   */
  constructor({ usersCount }) {
    super(usersCount);
  }

  /**
   * @returns {import('./User').User[]}
   */
  generate() {
    const users = this.entityIds.map((entry, id) => this.getUser({ id }));

    return users;
  }

  /**
   * 
   * @param {import('./User').Constructor} params 
   * @returns {import('./User')}
   */
  getUser(params) {
    return new User(params);
  }
}

module.exports = { UserGenerator };
