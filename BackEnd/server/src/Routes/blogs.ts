import IBlogController from "./../Entities/ControllerEntities/iBlogController";
import { Router } from "express";

const router = Router();

export default function createBlogRoutes (blogController: IBlogController) {

  router.get('/blog', blogController.getBlogs);

  router.get('/blog/:id', blogController.getBlogById);

  router.post('/blog', blogController.insertBlog);

  router.put('/blog/:id', blogController.updateBlog);

  router.delete('/blog/:id', blogController.deleteBlog);

  return router;
}