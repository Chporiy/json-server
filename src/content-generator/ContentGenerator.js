class ContentGenerator {
  generate() {}

  getFakeEntities(count) {
    return [...Array(count)];
  }
}

module.exports = { ContentGenerator };
