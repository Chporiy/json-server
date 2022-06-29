const jsonServer = require("json-server");
const generate = require("./generate");

const server = jsonServer.create();
const router = jsonServer.router(
  generate({
    postsCount: Number(process.env.POSTS),
    usersCount: Number(process.env.USERS),
  })
);
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(process.env.PORT, () => {
  console.log(`JSON Server is running on port: ${process.env.PORT}`);
});
