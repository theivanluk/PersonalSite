import { NextFunction, Request, Response } from "express";

export default function isAuthorized(req: Request, res: Response, next: NextFunction): void {
  if (req.user === 'Admin') next();
  else res.sendStatus(403);
}