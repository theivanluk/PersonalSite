import formatUserInfo from "@/BusinessLogic/formatUserInfo";
import IDataAccess from "@/DataAccess/iDataAccess";
import IAuthController from "@/Entities/ControllerEntities/iAuthController";
import { UserInfoModel } from "./../Entities/DatabaseTypes";
import { handleControllerError } from "./../Entities/ErrorEntities";
import { NextFunction, Request, Response } from "express";


export default class AuthController implements IAuthController {
  private dataAccess: IDataAccess;

  constructor(dataAccess: IDataAccess) {
    this.dataAccess = dataAccess

    this.register = this.register.bind(this);
  }

  register(req: Request, res: Response): void {
    try {
      const { username, password, email } = req.body;
      const user: UserInfoModel = formatUserInfo(username, password, email);
      this.dataAccess.registerUser(user);
    } catch(err) {
      handleControllerError(err, res);
    }
  }

  logOut (req: Request, res: Response, next: NextFunction): void {
    req.logout(function(err) {
      if (err) { next(err) }
      else res.redirect('/blog?page=1')
    })
  }
}