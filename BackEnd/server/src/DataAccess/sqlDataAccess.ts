import IDataAccess from "./iDataAccess"

import { pgsql } from "./../Database/postgresConnection";
import { insert, getAll, update } from '../Entities/queryModel';
import { BlogFields, BlogModel } from "../Entities/DatabaseTypes";

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
    await pgsql.query('');
  }

  //////////////////// PROJECTS ////////////////////


}