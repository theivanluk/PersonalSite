import IDataAccess from '@/DataAccess/iDataAccess';
import IContactInfoController from './../Entities/ControllerEntities/iContactInfoController';
import { allContactInfoFields, ContactInfoFields, ContactInfoModel } from './../Entities/DatabaseTypes';
import { ForbiddenError, handleControllerError, ValidationError } from './../Entities/ErrorEntities';
import { Request, Response } from 'express';

export default class ContactInfoController implements IContactInfoController {
  private dataAccess: IDataAccess;

  constructor(dataAccess: IDataAccess) {
    this.dataAccess = dataAccess;
  }

  private validateContactInfoModel (input: any): input is ContactInfoModel {
    return (
      (input as ContactInfoModel).displaypic === 'string' &&
      (input as ContactInfoModel).email === 'string' &&
      (input as ContactInfoModel).linkedin === 'string' &&
      (input as ContactInfoModel).name === 'string' &&
      (input as ContactInfoModel).phone === 'string' &&
      (input as ContactInfoModel).github === 'string'
    );
  }

  private validateContactInfoFields (input: any) {
    return allContactInfoFields.includes(input as ContactInfoFields);
  }

  async getContactInfo(req: Request, res: Response): Promise<void> {
    try {
      const data = <ContactInfoModel> await this.dataAccess.getContactInfo();
      res.status(200).json(data);
    } catch(err) {
      handleControllerError(err, res);
    }
  }

  async insertContactInfo(req: Request, res: Response): Promise<void> {
    try {
      // validate database table size
      if (await this.dataAccess.getContactInfoSize() !== 0) throw new ForbiddenError();
      if (!this.validateContactInfoModel(req.body)) throw new ValidationError();
      await this.dataAccess.insertContactInfo(req.body);
      res.sendStatus(201);
    } catch(err) {
      handleControllerError(err, res);
    }
  }

  async updateContactInfo(req: Request, res: Response): Promise<void> {
    try {
      const { field, data } = req.body;
      if (!this.validateContactInfoFields(field)) throw new ValidationError();
      await this.dataAccess.updateContactInfo(field, data);
      res.sendStatus(200);
    } catch(err) {
      handleControllerError(err, res);
    }
  }

  async deleteContactInfo(req: Request, res: Response): Promise<void> {
    try {
      res.sendStatus(401);
    } catch(err) {
      handleControllerError(err, res);
    }
  }

}