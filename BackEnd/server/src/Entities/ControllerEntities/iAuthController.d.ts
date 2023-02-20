import { NextFunction, Request, Response } from "express";

export default interface IAuthController {
  async login(req: Request, res: Response): Promise<void>
  async register(req: Request, res: Response, next: NextFunction): Promise<void>;
  logOut(req: Request, res: Response, next: NextFunction): void;
}