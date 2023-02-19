import { Request, Response } from 'express';

import IDataAccess from '@/DataAccess/iDataAccess';
import IAboutMeController from './../Entities/ControllerEntities/iAboutMeController';
import { AboutMeModel, AboutMeFields, allAboutMeFields } from './../Entities/DatabaseTypes';
import { ValidationError, QueryError, handleControllerError, ForbiddenError } from './../Entities/ErrorEntities';

export default class AboutMeCntroller implements IAboutMeController {
  private dataAccess: IDataAccess;

  constructor(dataAccess: IDataAccess) {
    this.dataAccess = dataAccess
  }

  private validateAboutMeModel(input: any): input is AboutMeModel {
    return (
      (input as AboutMeModel).description === 'string' &&
      (input as AboutMeModel).displaypic === 'string'
    );
  }

  private validateAboutMeFields(input: any): input is AboutMeFields {
    return allAboutMeFields.includes(input as AboutMeFields);
  }

  public async getAboutMe(req: Request, res: Response): Promise<void> {
    try {
      const data = <AboutMeModel[]> await this.dataAccess.getAboutMe();
      if (data.length === 0) throw new QueryError();
      res.status(200).json(data);
    } catch(err) {
      handleControllerError(err, res);
    }
  }

  public async insertAboutMe(req: Request, res: Response): Promise<void> {
    try {
      if (!this.validateAboutMeModel(req.body)) throw new ValidationError();
      if (await this.dataAccess.getAboutMeSize() !== 0) throw new ForbiddenError();
      await this.dataAccess.insertAboutMe(req.body);
      res.sendStatus(201);
    } catch(err) {
      handleControllerError(err, res);
    }
  }

  public async updateAboutMe(req: Request, res: Response): Promise<void> {
    try {
      const { field, data } = req.body;
      if (
        !this.validateAboutMeFields(field) &&
        typeof data !== 'string'
      ) throw new ValidationError();
      await this.dataAccess.updateAboutMe(field, data);
      res.sendStatus(200);
    } catch(err) {
      handleControllerError(err, res);
    }
  }

  public async deleteAboutMe(req: Request, res: Response): Promise<void> {
    try {
      res.sendStatus(401);
    } catch(err) {
      handleControllerError(err, res);
    }
  }
}