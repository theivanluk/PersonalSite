import { BlogInput, ProjectsInput, AboutMeInput, ContactInfoInput, UserInfoInput} from './../Models/DatabaseTypes'

export const insert = {
  to: {
    Blog: (blogInput: BlogInput): string => {
      const { postTitle, picture, blog, date_posted } = blogInput;
      return `
        INSERT INTO
          blog_post (post_title, picture, blog, date_posted)
        VALUES
          ('${postTitle}','${picture}','${blog}','${date_posted}')
      `
    },
    Projects: (projectInput: ProjectsInput): string => {
      const { project_name, project_description, project_url, project_updated, project_pic} = projectInput;
      return `
        INSERT INTO
          projects (project_name, project_description, project_url, project_updated, project_pic)
        VALUES
          ('${project_name}', '${project_description}', '${project_url}', '${project_updated}', '${project_pic}')
      `
    },
    AboutMe: (aboutMeInput: AboutMeInput): string => {
      const {description, lastupdated, displaypic} = aboutMeInput;
      return `
        INSERT INTO
          about_me (description, lastupdated, displaypic)
        VALUES
          ('${description}', '${lastupdated}', '${displaypic}')
      `
    },
    ContactInfo: (contactMeInput: ContactInfoInput): string => {
      const { name, displaypic, phone, email, linkedin, github } = contactMeInput;
      return `
        INSERT INTO
          contact_info (name, displaypic, phone, email, linkedin, github)
        VALUES
          ('${name}', '${displaypic}', '${phone}', '${email}','${linkedin}','${github}')
      `
    },
    UserInfo: (userInfoInput: UserInfoInput): string => {
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

export const get = {
  from: {

  }
}

export const getAll = {
  from: {
    Blog: '',
    Projects: '',
    AboutMe: '',
    ContactInfo: '',
    UserInfo: ''
  }
}