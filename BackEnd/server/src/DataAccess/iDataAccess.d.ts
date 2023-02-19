import { AboutMeFields, AboutMeModel, ContactInfoFields, ContactInfoModel, ProjectFields, ProjectsModel, UserInfoModel } from "@/Entities/DatabaseTypes";
import { insert } from "@/Entities/queryModel";
import { BlogFields } from "./Entities/DatabaseTypes";


export default interface IDataAccess {

  ////////////////////// Blogs //////////////////////

  getBlogs(page: number): Promise<BlogModel[] | unknown>;
  getBlog(id: number): Promise<BlogModel[] | unknown>;
  insertBlogPost(blogInput: BlogModel): Promise<void | unknown>;
  updateBlogPost(id: number, field: BlogFields, data: string): Promise<void | unknown>;
  deleteBlogPost(id: number): Promise<void | unknown>;

  ////////////////////// Projects //////////////////////

  getProjects(page: number): Promise<ProjectsModel[] | unknown>;
  getProject(id: number): Promsie<ProjectsModel[] | unknown>;
  insertProject(projectInput: ProjectsModel): Promise<void | unknown>;
  updateProject(id: number, field: ProjectFields, data: string): Promise<void | unknown>;
  deleteProject(id: number): Promise<void | unknown>;

  ////////////////////// AboutMe //////////////////////

  getAboutMe(): Promise<AboutMeModel[] | unknown>;
  insertAboutMe(aboutMeInput: AboutMeModel): Promise<void | unknown>;
  updateAboutMe(field: AboutMeFields, data: string): Promise<void | unknown>;
  getAboutMeSize(): Promise<number | undefined>;

  ////////////////////// ContactInfo //////////////////////

  getContactInfo(): Promise<ContactInfoModel[] | unknown>;
  insertContactInfo(contactInfoInput: ContactInfoModel): Promise<void | unknown>;
  updateContactInfo(field: ContactInfoFields, data: string): Promise<void | unknown>;
  getContactInfoSize(): Promise<number | undefined>;

  ////////////////////// UserInfo //////////////////////

  getUsername(username: string): Promise<UserInfoModel[] | unknown>;
  registerUser(userInfoInput: UserInfoModel): Promise<void | unknown>;

}