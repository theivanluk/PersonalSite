export type BlogModel = {
  post_title: string,
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
  role: UserRoles,
  date_joined: string
}

export type UserDatabaseModel = UserInfoModel & {
  user_id: number
}

export const allBlogFields = ['post_title', 'picture', 'blog'] as const;
type BlogFieldsTuple = typeof allBlogFields;
export type BlogFields = BlogFieldsTuple[number];

export const allProjectFields = ['project_name', 'project_description', 'project_url', 'project_pic'];
type ProjectFieldsTuple = typeof allProjectFields;
export type ProjectFields = ProjectFieldsTuple[number];

export const allContactInfoFields = ['displaypic', 'phone', 'email', 'linkedin', 'github'];
type ContactInfoFieldsTuple = typeof allContactInfoFields;
export type ContactInfoFields = ContactInfoFieldsTuple[number];

export const allAboutMeFields = ['description', 'displaypic'];
type AboutMeTuple = typeof allAboutMeFields;
export type AboutMeFields = AboutMeTuple[number];

export const allUserInfoFields = ['description', 'displaypic'];
type UserInfoFieldsTuple = typeof allUserInfoFields
export type UserInfoFields = UserInfoFieldsTuple[number];

const allUserRoles = ['User', 'Admin'];
type UserRoleTuple = typeof allUserRoles;
type UserRoles = UserRoleTuple[number];