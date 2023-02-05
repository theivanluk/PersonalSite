import path from 'path';
import { BlogModel, ProjectsModel, AboutMeModel, ContactInfoModel, UserInfoModel} from './../Models/DatabaseTypes'

export const insert = {
  to: {
    Blog: (blogInput: BlogModel): string => {
      const { postTitle, picture, blog, date_posted } = blogInput;
      return `
        INSERT INTO
          blog_post (post_title, picture, blog, date_posted)
        VALUES
          ('${postTitle}','${picture}','${blog}','${date_posted}')
      `
    },
    Projects: (projectInput: ProjectsModel): string => {
      const { project_name, project_description, project_url, project_updated, project_pic} = projectInput;
      return `
        INSERT INTO
          projects (project_name, project_description, project_url, project_updated, project_pic)
        VALUES
          ('${project_name}', '${project_description}', '${project_url}', '${project_updated}', '${project_pic}')
      `
    },
    AboutMe: (aboutMeInput: AboutMeModel): string => {
      const {description, lastupdated, displaypic} = aboutMeInput;
      return `
        INSERT INTO
          about_me (description, lastupdated, displaypic)
        VALUES
          ('${description}', '${lastupdated}', '${displaypic}')
      `
    },
    ContactInfo: (contactMeInput: ContactInfoModel): string => {
      const { name, displaypic, phone, email, linkedin, github } = contactMeInput;
      return `
        INSERT INTO
          contact_info (name, displaypic, phone, email, linkedin, github)
        VALUES
          ('${name}', '${displaypic}', '${phone}', '${email}','${linkedin}','${github}')
      `
    },
    UserInfo: (userInfoInput: UserInfoModel): string => {
      const { username, password, email, date_joined} = userInfoInput;
      return `
        INSERT INTO
          user_info (username, password, email, date_joined)
        VALUES
          ('${username}', '${password}', '${email}', '${date_joined}')
      `
    }
  }
}

export const getAll = {
  by: {
    mostRecent: {
      Blog: (pages: number = 1, limit: number = 5): string => `
        SELECT
          *
        FROM
          blog_post
        ORDER BY
          date_posted DESC
        LIMIT ${limit} OFFSET ${limit * (pages - 1)}
        `,
      Projects: (pages: number = 1, limit: number = 5): string => `
        SELECT
          *
        FROM
          blog_post
        ORDER BY
          date_posted DESC
        LIMIT ${limit} OFFSET ${limit * (pages - 1)}
        `,
      AboutMe: (): string => `
        SELECT
          *
        FROM
          about_me
        `,
      ContactInfo: (): string => `
        SELECT
          *
        FROM
          contact_info
        `,
      UserInfo: (pages: number = 1, limit: number = 5): string => `
        SELECT
          *
        FROM
          user_info
        ORDER BY
          username ASC
        LIMIT ${limit} OFFSET ${limit * (pages - 1)}
        `,
    }
  }
}