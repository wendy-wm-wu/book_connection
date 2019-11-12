DROP TABLE IF EXISTS users;
CREATE TABLE users (
  ID serial PRIMARY KEY,
  userID VARCHAR(40) NOT NULL UNIQUE,
  password VARCHAR(64) NOT NULL
  salt VARCHAR(64)
);

DROP TABLE IF EXISTS books;
CREATE TABLE books (
  ID serial PRIMARY KEY,
  rank SMALLINT,
  weeksOnList SMALLINT,
  isbn SMALLINT,
  description VARCHAR(256),
  title VARCHAR(30),
  author VARCHAR(30),
  image text
);

