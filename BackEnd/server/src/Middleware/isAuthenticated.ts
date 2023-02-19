import { NextFunction, Request, Response } from "express";

export default function isAuthenticated (req: Request, res: Response, next: NextFunction) {
  if (req.user) {
    console.log(req.user, "Request User");
    next();
  } else {
    console.log("Not Authenticated");
    res.redirect('/auth/login');
  }
}