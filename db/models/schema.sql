DROP TABLE IF EXISTS users;
CREATE TABLE users (
  ID serial PRIMARY KEY,
  userID VARCHAR(40) NOT NULL UNIQUE,
  password VARCHAR(64) NOT NULL,
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
  title VARCHAR(255),
  author VARCHAR(30),
  description text,
  image text,
  readBook boolean
);

-- CREATE INDEX booksByUserID ON books(userID);

DROP TABLE IF EXISTS NYTbooks;
CREATE TABLE NYTbooks (
  ID serial PRIMARY KEY,
  userID SMALLINT,
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
  description text,
  venueID INT NOT NULL UNIQUE,
  startTime VARCHAR(30),
  endTime VARCHAR(30),
  image text
);

DROP TABLE IF EXISTS venues;
CREATE TABLE venues (
  ID serial PRIMARY KEY,
  name VARCHAR(30),
  address VARCHAR(100),
  city VARCHAR(30),
  region VARCHAR(30),
  postalCode VARCHAR(10),
  country VARCHAR(30),
  latitude SMALLINT NOT NULL,
  longitude SMALLINT NOT NULL,
  venueID VARCHAR(30),
  capacity VARCHAR(30)
);






