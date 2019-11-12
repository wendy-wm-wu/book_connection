DROP TABLE IF EXISTS users;
CREATE TABLE users (
  ID serial PRIMARY KEY,
  userID VARCHAR(40) NOT NULL UNIQUE,
  password VARCHAR(64) NOT NULL
  salt VARCHAR(64)
);

DROP TABLE IF EXISTS userLists;
CREATE TABLE userLists (
  ID serial PRIMARY KEY,
  listName VARCHAR(30) NOT NULL UNIQUE,
  userID SMALLINT NOT NULL
);

CREATE INDEX userIdIndex ON userLists(userID);

DROP TABLE IF EXISTS books;
CREATE TABLE books (
  ID serial PRIMARY KEY,
  userID SMALLINT NOT NULL,
  title VARCHAR(30),
  author VARCHAR(30),
  description VARCHAR(256),
  averageRating SMALLINT,
  image text
);

CREATE INDEX booksByUserID ON books(userID);

DROP TABLE IF EXISTS NYTbooks;
CREATE TABLE NYTbooks (
  ID serial PRIMARY KEY,
  userID SMALLINT NOT NULL,
  rank SMALLINT,
  weeksOnList SMALLINT,
  isbn SMALLINT,
  description VARCHAR(256),
  title VARCHAR(30),
  author VARCHAR(30),
  image text
);

DROP TABLE IF EXISTS events;
CREATE TABLE events (
  ID serial PRIMARY KEY,
  name VARCHAR(30),
  venueID SMALLINT NOT NULL UNIQUE,
  start VARCHAR(30),
  end VARCHAR(30)
);

DROP TABLE IF EXISTS venues;
CREATE TABLE venues (
  ID serial PRIMARY KEY,
  name VARCHAR(30),
  latitude SMALLINT NOT NULL,
  longitude SMALLINT NOT NULL
);






