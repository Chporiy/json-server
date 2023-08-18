const { faker } = require("@faker-js/faker");
const { ContentGenerator } = require("../../content-generator/ContentGenerator");
const { Post } = require("./Post");

class PostGenerator extends ContentGenerator {
  /**
   * 
   * @param {Object} params
   * @param {number} params.postsCount
   * @param {number} params.usersCount
   */
  constructor({ postsCount, usersCount }) {
    super(postsCount);

    this.usersCount = usersCount;
  }

  /**
   * @returns {import('./Post').Post[]}
   */
  generate() {
    const userIds = this.getEntityIds(this.usersCount);
    const posts = this.entityIds.map((entry, id) => {
      const userId = faker.helpers.arrayElement(userIds);

      return this.getPost({
        id,
        userId,
      });
    });

    return posts;
  }

  /**
   * 
   * @param {import('./Post').Constructor} params 
   * @returns {import('./Post')}
   */
  getPost(params) {
    return new Post(params);
  }
}

module.exports = { PostGenerator };
