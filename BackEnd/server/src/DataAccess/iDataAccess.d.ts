import { BlogFields } from "./Entities/DatabaseTypes";


export default interface IDataAccess {

  getBlogs(page: number): Promise<BlogModel[] | unknown>;
  getBlog(id: number): Promise<BlogModel[] | unknown>;
  insertBlogPost(blogInput: BlogModel): Promise<void | unknown>;
  updateBlogPost(id: number, field: BlogFields, data: string): Promise<void | unknown>;
  deleteBlogPost(id: number): Promise<void | unknown>;


}