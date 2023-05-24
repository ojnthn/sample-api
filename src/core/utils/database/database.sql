/*
docker exec -it pg bash
psql
*/

CREATE DATABASE sampleApi;

CREATE TABLE IF NOT EXISTS user_categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  situation CHAR
);

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  category_id INTEGER,
  FOREIGN KEY(category_id) REFERENCES user_categories(id),
  email VARCHAR UNIQUE,
  phone VARCHAR,
  situation CHAR
);

CREATE TABLE IF NOT EXISTS product_categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  situation CHAR
);

CREATE TABLE IF NOT EXISTS products (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  price FLOAT,
  situation CHAR,
  category_id INTEGER,
  FOREIGN KEY(category_id) REFERENCES product_categories(id)
)
