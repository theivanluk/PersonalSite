import { BlogModel, ProjectsModel, AboutMeModel, ContactInfoModel, UserInfoModel, BlogFields, ContactInfoFields, AboutMeFields, ProjectFields } from './DatabaseTypes'

export const insert = {
  to: {
    Blog: (blogInput: BlogModel): string => {
      const { post_title, picture, blog, date_posted } = blogInput;
      return `
        INSERT INTO
          blog_post (post_title, picture, blog, date_posted)
        VALUES
          ('${post_title}','${picture}','${blog}','${date_posted}')
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
    },
    id: {
      Blog: (id: number): string => `
        SELECT
          *
        FROM
          blog_post
        WHERE
          post_id = ${id}
      `,
      Project: (id: number): string => `
        SELECT
          *
        FROM
          projects
        WHERE
          project_id = ${id}
      `
    }
  }
}

export const update = {
  blogPost: (id: number, field: BlogFields, data: string): string => `
    UPDATE
      blog_post
    SET
      ${field} = ${data}
    WHERE post_id = ${id}
  `,
  ContactInfo: (field: ContactInfoFields, data: string): string => `
    UPDATE
      contact_info
    SET
      ${field} = ${data}
    WHERE id = 1
  `,
  AboutMe: (field: AboutMeFields, data: string): string => `
    UPDATE
      about_me
    SET
      ${field} = ${data}
    WHERE id = 1
  `,
  Projects: (id: number, field: ProjectFields, data: string): string => `
    UPDATE
      projects
    SET
      ${field} = ${data}
    WHERE id = ${id}
  `
};

export const del = {
  by: {
    id: {
      blogPost: (id: number): string => `
        DELETE FROM
          blog_post
        WHERE
          post_id = ${id}
      `,
      Projects: (id: number): string => `
        DELETE FROM
          projects
        WHERE
          project_id = ${id}
      `
    }
  }
};