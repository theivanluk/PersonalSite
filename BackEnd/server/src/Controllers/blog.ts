import { Request, Response } from 'express';
import { BlogDAO } from './../DataAccess/blog';

const Blogs = new BlogDAO();

export async function get (req: Request, res: Response): Promise<void> {
  try {
    const Blogs = new BlogDAO();
    const page = req.query;
    if (typeof page !== 'number') throw Error();
    const data = await Blogs.getBlogPosts(page);
    res.status(200).json(data);
  } catch(err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function post (req: Request, res: Response): Promise<void> {
  try {
    const blogPost = new BlogDAO();
    if (!blogPost.isBlogModel(req.body)) throw Error();
    await blogPost.insertBlogPost(req.body);
    res.sendStatus(201);
  } catch(err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function put (req: Request, res: Response): Promise<void> {
  try {
    const blogPost = new BlogDAO();
    throw Error;
  } catch(err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async  function del (req: Request, res: Response): Promise<void> {
  try {
    const blogPost = new BlogDAO();
    throw Error;
  } catch(err) {
    console.log(err);
    res.sendStatus(500);
  }
}