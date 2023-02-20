import { AuthenticationError, handleControllerError } from "./../Entities/ErrorEntities";
import { NextFunction, Request, Response } from "express";

export default function isAuthenticated (req: Request, res: Response, next: NextFunction) {
  try {
    if (req.user) next();
    else throw new AuthenticationError();
  } catch(err) {
    handleControllerError(err, res);
  }
}