import IBlogController from "./../Entities/ControllerEntities/iBlogController";
import { Router } from "express";
import isAuthenticated from "./../Middleware/isAuthenticated";
import isAuthorized from "./../Middleware/isAuthorized";

const router = Router();

export default function createBlogRoutes (blogController: IBlogController): Router {

  router.get('/blog', blogController.getBlogs);

  router.get('/blog/:id', blogController.getBlogById);

  router.post('/blog', isAuthenticated, isAuthorized,blogController.insertBlog);

  router.put('/blog/:id', isAuthenticated, isAuthorized, blogController.updateBlog);

  router.delete('/blog/:id', isAuthenticated, isAuthorized, blogController.deleteBlog);

  return router;
}