type BlogInput = [string, string, string, Date];
type ProjectsInput = [string, string, string, Date, string];
type AboutMeInput = [string, Date, string];
type ContactInfoInput = [string, string, string, string, string,];
type UserInfoInput = [string, string, string];


export const insert = {
  to: {
    Blog: (blogInput: BlogInput): string =>
      `INSERT INTO blog_post VALUES (${blogInput.join(',')})`,
    Projects: (projectInput: ProjectsInput): string =>
      `INSERT INTO projects VALUES (${projectInput.join(',')})`,
    AboutMe: (aboutMeInput: AboutMeInput): string =>
      `INSERT INTO about_me VALUES (${aboutMeInput.join(',')})`,
    ContactInfo: (contactMeInput: ContactInfoInput): string =>
      `INSERT INTO contact_info VALUES (${contactMeInput.join(',')})`,
    UserInfo: (userInfoInput: UserInfoInput): string =>
      `INSERT INTO user_info VALUES (${userInfoInput.join(',')})`
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