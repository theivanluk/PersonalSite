import IDataAccess from '@/DataAccess/iDataAccess';
import { Request, Response } from 'express';

export default interface IBlogController {
  getBlogs(req: Request, res: Response): Promise<void>;
  getBlogById(req: Request, res: Response): Promise<void>;
  insertBlog(req: Request, res: Response): Promise<void>;
  updateBlog(req: Request, res: Respose): Promise<void>;
  deleteBlog(req: Request, res: Response): Promise<void>;
}