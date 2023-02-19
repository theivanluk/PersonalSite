import IDataAccess from "@/DataAccess/iDataAccess";
import IAuthController from "@/Entities/ControllerEntities/iAuthController";
import { NextFunction, Request, Response } from "express";
import { nextTick } from "process";


export default class AuthController implements IAuthController {
  private dataAccess: IDataAccess;

  constructor(dataAccess: IDataAccess) {
    this.dataAccess = dataAccess
  }

  register(req: Request, res: Response): void {

  }

  logout (req: Request, res: Response, next: NextFunction): void {
    req.logout(function(err) {
      if (err) { next(err) }
      else res.redirect('/blog?page=1')
    })
  }
}