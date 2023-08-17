# json-server

Simple json-server with a generated fake data \
The data generator is [Faker](https://github.com/faker-js/faker)

## Environment variables

    PORT=5555 - IP port for server
    POSTS=50 - number of posts
    USERS=10 - number of users
    COMMENTS=100 - number of comments

## DB structure

    Post {
      id: number unique;
      userId: number;
      title: string;
      body: string;
      preview: string;
      date: Date;
      commentIds: number[];
    }

    User {
      id: number unique;
      fullName: string;
      avatar: string;
      email: string;
    }

    Comment {
      id: number uniqie;
      postId: number;
      userId: number;
    }
