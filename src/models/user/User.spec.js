const { User } = require("./User");

describe('User', () => {
  it("should create an instance", () => {
    const user = new User();

    expect(user).toEqual({
      id: expect.any(String),
      fullName: expect.any(String),
      avatar: expect.any(String),
      email: expect.any(String),
    });
  });
});