import { pgsql } from "./postgresConnection";
import dotenv from 'dotenv';

import { blogSeed, projectSeed, aboutMeSeed, contactInfoSeed, userInfoSeed } from "./seedData";
import { insert } from "../Entities/queryModel";

dotenv.config();

(async function(): Promise<void> {

  for await (const seed of blogSeed) {
    await pgsql.query(insert.to.Blog(seed))
      .then(() => {
        console.log(insert.to.Blog(seed))
      })
      .catch(e => console.log(`Error inserting into blog_post: ${e}`));
  }

  for await (const seed of projectSeed) {
    await pgsql.query(insert.to.Projects(seed))
      .then(() => {
        console.log(insert.to.Projects(seed))
      })
      .catch(e => console.log(`Error inserting into projects: ${e}`));
  }

  for await (const seed of aboutMeSeed) {
    await pgsql.query(insert.to.AboutMe(seed))
      .then(() => {
        console.log(insert.to.AboutMe(seed))
      })
      .catch(e => console.log(`Error inserting into aboutMe: ${e}`));
  }

  for await (const seed of contactInfoSeed) {
    await pgsql.query(insert.to.ContactInfo(seed))
      .then(() => {
        console.log(insert.to.ContactInfo(seed))
      })
      .catch(e => console.log(`Error inserting into contactInfo: ${e}`));
  }

  for await (const seed of userInfoSeed) {
    await pgsql.query(insert.to.UserInfo(seed))
      .then(() => {
        console.log(insert.to.UserInfo(seed))
      })
      .catch(e => console.log(`Error inserting into userInfo: ${e}`));
  }

})();