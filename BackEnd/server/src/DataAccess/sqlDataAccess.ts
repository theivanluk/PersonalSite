import IDataAccess from "./iDataAccess"

import { pgsql } from "./../Database/postgresConnection";
import { insert, getAll, update, del, getNumRowsFor } from '../Entities/queryModel';
import { AboutMeFields, AboutMeModel, BlogFields, BlogModel, ContactInfoFields, ContactInfoModel, ProjectFields, ProjectsModel, UserInfoModel } from "../Entities/DatabaseTypes";

export default class SQLDataAcceess implements IDataAccess {

  //////////////////// BLOGS ////////////////////

  async getBlogs(page: number = 1): Promise<BlogModel[] | unknown> {
    const { rows } : { rows: any[] } = await pgsql.query(getAll.by.mostRecent.Blog(page));
    const data = <BlogModel[]> rows;
    return data;
  }

  async getBlog(id: number): Promise<BlogModel[] | unknown> {
    const { rows } : { rows: any[] } = await pgsql.query(getAll.by.id.Blog(id));
    const data = <BlogModel[]> rows;
    return data;
  }

  async insertBlogPost(blogInput: BlogModel): Promise<void | undefined> {
    await pgsql.query(insert.to.Blog(blogInput));
  }

  async updateBlogPost(id: number, field: BlogFields, data: string): Promise<void | undefined> {
    await pgsql.query(update.blogPost(id, field, data));
  }

  async deleteBlogPost(id: number): Promise<void | undefined> {
    const res = await pgsql.query(del.by.id.blogPost(id));
    console.log(res);
  }

  //////////////////// PROJECTS ////////////////////

  async getProjects(page: number):Promise<ProjectsModel[] | unknown> {
    const { rows } : { rows: any[] } = await pgsql.query(getAll.by.mostRecent.Projects(page));
    const data = <ProjectsModel[]> rows;
    return data;
  }

  async getProject(id: number): Promise<ProjectsModel | unknown> {
    const { rows } : { rows: any[] } = await pgsql.query(getAll.by.id.Project(id));
    const data = <ProjectsModel[]> rows;
    return data;
  }

  async insertProject(projectInput: ProjectsModel): Promise<void | undefined> {
    await pgsql.query(insert.to.Projects(projectInput));
  }

  async updateProject(id: number, field: ProjectFields, data: string): Promise<void | undefined> {
    await pgsql.query(update.Projects(id, field, data));
  }

  async deleteProject(id: number): Promise<void | undefined> {
    await pgsql.query(del.by.id.Projects(id));
  }

  //////////////////// ABOUTME ////////////////////

  async getAboutMe(): Promise<AboutMeModel[] | unknown> {
    const { rows } : { rows: any[] } = await pgsql.query(getAll.by.mostRecent.AboutMe());
    const data = <AboutMeModel[]> rows;
    return data;
  }

  async insertAboutMe(aboutMeInput: AboutMeModel): Promise<void | undefined> {
    await pgsql.query(insert.to.AboutMe(aboutMeInput));
  }

  async updateAboutMe(field: AboutMeFields, data: string): Promise<void | undefined> {
    await pgsql.query(update.AboutMe(field, data))
  }

  async getAboutMeSize(): Promise<number | undefined> {
    const { rows } : { rows: any[] } = await pgsql.query(getNumRowsFor.AboutMe());
    const numRows = <number> rows[0];
    return numRows;
  }

  //////////////////// CONTACTINFO ////////////////////

  async getContactInfo(): Promise<ContactInfoModel[] | unknown> {
    const { rows } : { rows: any[] } = await pgsql.query(getAll.by.mostRecent.ContactInfo())
    const data = <ContactInfoModel[]> rows;
    return data;
  }

  async insertContactInfo(contactInfoInput: ContactInfoModel): Promise<void | undefined> {
    await pgsql.query(insert.to.ContactInfo(contactInfoInput));
  }

  async updateContactInfo(field: ContactInfoFields, data: string): Promise<void | undefined> {
    await pgsql.query(update.ContactInfo(field, data));
  }

  async getContactInfoSize(): Promise<number | undefined> {
    const { rows }: { rows: any[] } = await pgsql.query(getNumRowsFor.ContactInfo());
    const numRows = <number> rows[0];
    return numRows;
  }

    //////////////////// USERINFO ////////////////////

  async getUsername(username: string): Promise<UserInfoModel[] | undefined> {
    const { rows }: { rows: any[] } = await pgsql.query(getAll.by.username(username));
    const users = <UserInfoModel[]> rows;
    return users;
  }

}