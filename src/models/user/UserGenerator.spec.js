const { UserGenerator } = require("./UserGenerator");

describe('UserGenerator', () => {
  const usersCount = 5;
  const params = { usersCount };
  
  it("should return the passed number of users", () => {
    const generator = new UserGenerator(params);
    const users = generator.generate();

    expect(users).toHaveLength(usersCount);
  });  
});