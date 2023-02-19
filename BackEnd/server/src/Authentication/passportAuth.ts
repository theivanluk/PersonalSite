import { Strategy as LocalStrategy, Strategy } from 'passport-local';
import passport from 'passport';

import { UserInfoModel } from './../Entities/DatabaseTypes';
import IDataAccess from '@/DataAccess/iDataAccess';

export class PassportAuth {
  private dataAccess: IDataAccess;

  constructor(dataAccess: IDataAccess) {
    this.dataAccess = dataAccess;

    this.serializeUser = this.serializeUser.bind(this);
    this.deserializeUser = this.deserializeUser.bind(this);

    this.serializeUser();
    this.deserializeUser();

    passport.use(this.createLocalStrategy());
  }

  private serializeUser(): void {
    passport.serializeUser((user, done) => {
      const userObj = <UserInfoModel> user
      // console.log(user, 'serialize');
      done(null, userObj.username);
    })
  }

  private deserializeUser(): void {
    passport.deserializeUser(async (username: string, done) => {
      try {
        const users = <UserInfoModel[]> await this.dataAccess.getUsername(username);
        // console.log(users[0], 'deserialize');
        if (username.length !== 0) done(null, users[0]);
        else done(null, false);
      } catch(err) {
        done(err, null);
      }
    })
  }

  private createLocalStrategy(): Strategy {
    return new LocalStrategy(async (username: string, password: string, done):Promise<void> => {
      try {
        const users = <UserInfoModel[]> await this.dataAccess.getUsername(username);
        // console.log(users, 'local strat');

        if (users.length === 0 || users[0].password !== password) {
          done(null, false);
        } else
        if (users[0].password === password) {
          done(null, users[0]);
        }
      } catch (err) {
        done(err, false);
      }
    })
  }
}