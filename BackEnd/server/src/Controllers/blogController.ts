import { Request, Response } from 'express';

import IDataAccess from "./../DataAccess/iDataAccess";
import IBlogController from "../Entities/ControllerEntities/iBlogController";
import { allBlogFields, BlogFields, BlogModel } from '../Entities/DatabaseTypes';

export default class BlogController implements IBlogController {
  private dataAccess: IDataAccess;

  constructor(dataAccess: IDataAccess) {
    this.dataAccess = dataAccess;

    this.getBlogs = this.getBlogs.bind(this);
    this.getBlogById = this.getBlogById.bind(this);
    this.insertBlog = this.insertBlog.bind(this);
    this.updateBlog = this.updateBlog.bind(this);
    this.deleteBlog = this.deleteBlog.bind(this);
  }

  private validateBlogModel(input: any): input is BlogModel {
    return (
      (input as BlogModel).post_title === 'string' &&
      (input as BlogModel).picture === 'string' &&
      (input as BlogModel).blog === 'string' &&
      (input as BlogModel).date_posted === 'string'
    );
  }

  private validateBlogField(input: any): input is BlogFields {
    return allBlogFields.includes(input as BlogFields)
  }

  public async getBlogs(req: Request, res: Response): Promise<void> {
    try {
      const { page } = req.query;
      if (isNaN(Number(page))) throw Error('Bad Request');
      const data = <BlogModel[]> await this.dataAccess.getBlogs(Number(page));
      res.status(200).json(data);
    } catch(err: any) {
      switch (err.message) {
        case 'Bad Request':
          res.sendStatus(400);
          break;
        case 'Not Found':
          res.sendStatus(404);
          break;
        default:
          res.sendStatus(500);
          console.log(err);
          break;
      }
    }
  }

  public async getBlogById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      if (isNaN(Number(id))) throw Error('Bad Request');
      const data = <BlogModel[]> await this.dataAccess.getBlog(Number(id));
      if (data.length === 0) throw Error('Not Found');
      res.status(200).json(data);
    } catch(err: any) {
      switch (err.message) {
        case 'Bad Request':
          res.sendStatus(400);
          break;
        case 'Not Found':
          res.sendStatus(404);
          break;
        default:
          res.sendStatus(500);
          console.log(err);
          break;
      }
    }
  }

  public async insertBlog(req: Request, res: Response): Promise<void> {
    try {
      if (!this.validateBlogModel(req.body)) throw Error('Bad Request');
      await this.dataAccess.insertBlogPost(req.body);
      res.sendStatus(201);
    } catch(err: any) {
      switch (err.message) {
        case 'Bad Request':
          res.sendStatus(400);
          break;
        default:
          res.sendStatus(500);
          console.log(err);
          break;
      }
    }
  }

  public async updateBlog(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const { field, data } = req.body;
      if (isNaN(Number(id))) throw Error('Bad Request');
      if (!this.validateBlogField(field)) throw Error('Bad Request');
      if (typeof data !== 'string') throw Error('Bad Request');
      await this.dataAccess.updateBlogPost(Number(id), field, data);
      res.status(200)
    } catch(err: any) {
      switch (err.message) {
        case 'Bad Request':
          res.sendStatus(400);
          break;
        case 'Not Found':
          res.sendStatus(404);
          break;
        default:
          res.sendStatus(500);
          console.log(err);
          break;
      }
    }
  }

  public async deleteBlog(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      if (isNaN(Number(id))) throw Error('Bad Request');
      await this.dataAccess.deleteBlogPost(Number(id));
      res.status(200);
    } catch(err: any) {
      switch (err.message) {
        case 'Bad Request':
          res.sendStatus(400);
          break;
        case 'Not Found':
          res.sendStatus(404);
          break;
        default:
          res.sendStatus(500);
          console.log(err);
          break;
      }
    }
  }
}