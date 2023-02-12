import { QueryResult } from 'pg';

import { BlogFields, BlogModel } from '../Entities/DatabaseTypes'
import { insert, getAll, update } from '../Entities/queryModel';
import { pgsql } from '../Database/postgresConnection';

export class BlogDAO {

  isBlogModel(input: any): input is BlogModel {
    return (
      (input as BlogModel).post_title === 'string' &&
      (input as BlogModel).picture === 'string' &&
      (input as BlogModel).blog === 'string' &&
      (input as BlogModel).date_posted === 'string'
    );
  }

  async getBlogPosts(page: number = 1): Promise<BlogModel[] | unknown> {
    try {
      const { rows }: { rows: any[] } = await pgsql.query(getAll.by.mostRecent.Blog(page));
      const data = <BlogModel[]> rows;
      return data;
    } catch(err) {
      console.log("DAO: Error retrieving data from blogs: ", err);
      return err;
    }
  }

  async insertBlogPost(blogInput: BlogModel): Promise<void | undefined> {
    try {
      await pgsql.query(insert.to.Blog(blogInput));
    } catch(err) {
      console.log("DAO: Error inserting to blog: ", err);
    }
  }

  async updateBlogPost(id: number, field: BlogFields, data: string):Promise<void | unknown> {
    try {
      await pgsql.query(update.blogPost(id, field, data));
    } catch(err) {
      return err;
    }
  }

  // Unimplemented
  async deleteBlogPost(blogInput: BlogModel):Promise<void | unknown> {
    try {
      await pgsql.query('a');
    } catch(err) {
      return err;
    }
  }
}