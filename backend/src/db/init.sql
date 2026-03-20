-- Init script for Ranking_Muzyczny database


-- Users table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  user_name TEXT,
  email TEXT UNIQUE NOT NULL,
  hash_password TEXT NOT NULL
);

-- Songs table (store Deezer track id)
CREATE TABLE songs (
  id BIGINT PRIMARY KEY,
  track_name TEXT,
  author TEXT
);

-- Votes table
CREATE TABLE votes (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  song_id BIGINT REFERENCES songs(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT NOW()
);


