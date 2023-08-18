class ContentGenerator {
  /**
   * @constructor
   * @param {number} entitiesCount 
   */
  constructor(entitiesCount) {
    this.entitiesCount = entitiesCount;
    this.entityIds = this.getEntityIds(entitiesCount);
  }

  generate() {}

  getEntityIds(count) {
    return [...Array(count)].map((entry, id) => id);
  }
}

module.exports = { ContentGenerator };
