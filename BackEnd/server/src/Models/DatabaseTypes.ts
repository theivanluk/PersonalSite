export type BlogInput = {
  postTitle: string,
  picture: string,
  blog: string,
  date_posted: string
};
export type ProjectsInput = {
  project_name: string,
  project_description: string,
  project_url: string,
  project_updated: string,
  project_pic: string
}
export type AboutMeInput = {
  description: string,
  lastupdated: string,
  displaypic: string
};
export type ContactInfoInput = {
  name: string,
  displaypic: string,
  phone: string,
  email: string,
  linkedin: string,
  github: string
};
export type UserInfoInput =   {
  username: string,
  password: string,
  email: string,
  date_joined: string
}