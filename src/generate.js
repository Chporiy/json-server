const { faker } = require("@faker-js/faker");

const generate = ({ postsCount, usersCount }) => {
  const posts = [...Array(postsCount)].map((entry, i) => ({
    id: i,
    userId: faker.datatype.number({
      min: 1,
      max: usersCount,
    }),
    title: faker.lorem.words(5),
    body: faker.lorem.text(),
    preview: faker.image.image(),
    date: faker.date.recent(7),
  }));
  const users = [...Array(usersCount)].map((entry, i) => {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();

    return {
      firstName,
      lastName,
      id: i,
      avatar: faker.image.avatar(),
      email: faker.internet.email(firstName, lastName),
    };
  });

  return {
    posts,
    users,
  };
};

module.exports = generate;
