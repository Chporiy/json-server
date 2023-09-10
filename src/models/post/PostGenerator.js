const { faker } = require("@faker-js/faker");
const { ContentGenerator } = require("../../content-generator/ContentGenerator");
const { Post } = require("./Post");

class PostGenerator extends ContentGenerator {
  /**
   * 
   * @param {Object} params
   * @param {number} params.postsCount
   * @param {import('../user/User').User[]} params.users
   */
  constructor({ postsCount, users }) {
    super();

    this.postsCount = postsCount;
    this.users = users;
  }

  /**
   * @returns {import('./Post').Post[]}
   */
  generate() {
    const posts = this.getFakeEntities(this.postsCount).map(() => {
      const { id: userId } = faker.helpers.arrayElement(this.users);

      return this.getPost({
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
