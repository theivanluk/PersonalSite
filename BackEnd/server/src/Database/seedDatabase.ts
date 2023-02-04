import { pgsql } from "./postgresConnection";

import { blogSeed, projectSeed, aboutMeSeed, contactInfoSeed, userInfoSeed } from "./seedData";
import { insert } from "./queryString";
import { link } from "fs";

for (const seed of blogSeed) {
  const { postTitle, picture, blog, date_posted } = seed;
  pgsql.query(insert.to.Blog([postTitle, picture, blog, date_posted]))
    .catch(e => console.log(`Error inserting into blog_post: ${e}`))
}

for (const seed of projectSeed) {
  const { project_name, project_description, project_url, project_updated, project_pic } = seed;
  pgsql.query(insert.to.Projects([project_name, project_description, project_url, project_updated, project_pic]))
    .catch(e => console.log(`Error inserting into projects: ${e}`))
}

for (const seed of aboutMeSeed) {
  const { description, lastupdated, displaypic } = seed;
  pgsql.query(insert.to.AboutMe([description, lastupdated, displaypic]))
    .catch(e => console.log(`Error inserting into about_me: ${e}`))
}

for (const seed of contactInfoSeed) {
  const { name, displaypic, phone, email, linkedin, github } = seed;
  pgsql.query(insert.to.ContactInfo([name, displaypic, phone, email, linkedin, github]))
    .catch(e => console.log(`Error inserting into contact_info: ${e}`))
}

for (const seed of userInfoSeed) {
  const { username, password, email, date } = seed;
  pgsql.query(insert.to.UserInfo([username, password, email, date]))
    .catch(e => console.log(`Error inserting into user_info: ${e}`))
}