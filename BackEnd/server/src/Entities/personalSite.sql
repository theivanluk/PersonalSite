DROP DATABASE IF EXISTS personalsite;

CREATE DATABASE personalsite;

\c personalsite;

CREATE TABLE blog_post (
  post_id SERIAL PRIMARY KEY,
  post_title VARCHAR(200) NOT NULL,
  picture VARCHAR(200) NOT NULL,
  blog TEXT NOT NULL,
  date_posted TIMESTAMPTZ NOT NULL
);

CREATE TABLE projects (
  project_id SERIAL PRIMARY KEY,
  project_name VARCHAR(50) NOT NULL,
  project_description TEXT NOT NULL,
  project_url VARCHAR(200) NOT NULL,
  project_updated TIMESTAMPTZ NOT NULL,
  project_pic VARCHAR(200) NOT NULL
);

CREATE TABLE about_me (
  description text NOT NULL,
  lastupdated TIMESTAMPTZ NOT NULL,
  displaypic VARCHAR(200) NOT NULL
);

CREATE TABLE contact_info (
  id SERIAL,
  name VARCHAR(50) NOT NULL,
  displaypic VARCHAR(200) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  linkedin VARCHAR(100) NOT NULL,
  github VARCHAR(50) NOT NULL
);

CREATE TYPE user_role as ENUM ('User', 'Admin');

CREATE TABLE user_info (
  user_id SERIAL PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  password VARCHAR(50) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  role user_role NOT NULL,
  date_joined TIMESTAMPTZ NOT NULL
);