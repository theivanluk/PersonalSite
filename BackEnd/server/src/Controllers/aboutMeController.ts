import IDataAccess from '@/DataAccess/iDataAccess';
import IAboutMeController from '@/Entities/ControllerEntities/iAboutMeController';
import { Request, Response } from 'express';

export default class AboutMeCntroller implements IAboutMeController {
  private dataAccess: IDataAccess;

  constructor(dataAccess: IDataAccess) {
    this.dataAccess = dataAccess
  }

  private validateAboutMeModel () {

  }

  private validateAboutMeFields() {

  }


}