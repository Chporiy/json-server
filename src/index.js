const jsonServer = require("json-server");
const auth = require("json-server-auth");
const generate = require("./generate");

const server = jsonServer.create();
const router = jsonServer.router(
  generate({
    postsCount: Number(process.env.POSTS),
    usersCount: Number(process.env.USERS),
  })
);
const rules = auth.rewriter({
  posts: 644,
  users: 644,
});

server.db = router.db;

server.use(jsonServer.defaults());
server.use(rules);
server.use(auth);
server.use(router);
server.listen(process.env.PORT, () => {
  console.log(`JSON Server is running on port: ${process.env.PORT}`);
});
