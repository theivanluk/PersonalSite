export type BlogModel = {
  postTitle: string,
  picture: string,
  blog: string,
  date_posted: string
};
export type ProjectsModel = {
  project_name: string,
  project_description: string,
  project_url: string,
  project_updated: string,
  project_pic: string
}
export type AboutMeModel = {
  description: string,
  lastupdated: string,
  displaypic: string
};
export type ContactInfoModel = {
  name: string,
  displaypic: string,
  phone: string,
  email: string,
  linkedin: string,
  github: string
};
export type UserInfoModel =   {
  username: string,
  password: string,
  email: string,
  date_joined: string
}