import formatUserInfo from "./../BusinessLogic/formatUserInfo";
import IDataAccess from "@/DataAccess/iDataAccess";
import IAuthController from "@/Entities/ControllerEntities/iAuthController";
import { UserDatabaseModel, UserInfoModel } from "./../Entities/DatabaseTypes";
import { handleControllerError } from "./../Entities/ErrorEntities";
import { NextFunction, Request, Response } from "express";
import truncateUserInfo from "./../BusinessLogic/truncateUserInfo";


export default class AuthController implements IAuthController {
  private dataAccess: IDataAccess;

  constructor(dataAccess: IDataAccess) {
    this.dataAccess = dataAccess

    this.register = this.register.bind(this);
  }

  async login(req: Request, res: Response): Promise<void> {
    try {
      const user = <UserDatabaseModel> req.user;
      res.status(200).json(truncateUserInfo(user));
    } catch(err) {
      res.sendStatus(500);
    }
  }

  async register(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { username, password, email } = req.body;
      const user: UserInfoModel = formatUserInfo(username, password, email);
      const registeredUser = <UserInfoModel> await this.dataAccess.registerUser(user);
      req.login(registeredUser, function(err) {
        if (err) return next(err)
        res.redirect('/blog?page=1');
      })
    } catch(err) {
      next(err);
    }
  }

  logOut (req: Request, res: Response, next: NextFunction): void {
    req.logout(function(err) {
      if (err) { next(err) }
      else res.redirect('/blog?page=1')
    })
  }

}