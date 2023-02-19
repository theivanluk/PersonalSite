import { NextFunction, Request, Response } from "express";

export default interface IAuthController {
  register(req: Request, res: Response): void;
  logOut(req: Request, res: Response, next: NextFunction): void;
}