# json-server

Simple json-server with a generated fake data
The data generator is [Faker](https://github.com/faker-js/faker)

## Environment variables

    PORT=5555 - IP port for server
    POSTS=50 - number of posts
    USERS=10 - number of users

## DB structure

    Post {
      id: number unique;
      userId: number;
      title: string;
      body: string;
      preview: string;
      date: Date;
    }

    User {
      id: number unique;
      firstName: string;
      lastName: string;
      avatar: string;
      email: string;
    }
