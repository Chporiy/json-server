const { User } = require("./User");

describe('User', () => {
  it("should create an instance", () => {
    const id = 0;
    const user = new User(id);

    expect(user).toEqual({
      id,
      fullName: expect.any(String),
      avatar: expect.any(String),
      email: expect.any(String),
    });
  });
});