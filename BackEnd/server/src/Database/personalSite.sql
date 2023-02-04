DROP DATABASE IF EXISTS personalsite;

CREATE DATABASE personalsite;

\c personalsite;

CREATE TABLE blog_post (
  post_id SERIAL PRIMARY KEY,
  post_title VARCHAR(200),
  picture VARCHAR(200),
  blog TEXT,
  date_posted DATE
);

CREATE TABLE projects (
  project_id SERIAL PRIMARY KEY,
  project_name VARCHAR(50),
  project_description TEXT,
  project_url VARCHAR(200),
  project_updated DATE,
  project_pic VARCHAR(200)
);

CREATE TABLE about_me (
  description text,
  lastupdated DATE,
  displaypic VARCHAR(200)
);

CREATE TABLE contact_info (
  id SERIAL,
  name VARCHAR(50),
  displaypic VARCHAR(200),
  phone VARCHAR(50),
  email VARCHAR(50),
  linkedin VARCHAR(100),
  github VARCHAR(50)
);

CREATE TABLE user_info (
  user_id SERIAL PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  password VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL,
  date_joined DATE
);