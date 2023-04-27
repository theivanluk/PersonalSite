import { Request, Response } from "express";
import { IDataAccess } from "../Entities/dataAccess";
import { IContactController } from "../Entities/controllers";

export class ContactController implements IContactController{
  private dataAccess: IDataAccess;

  constructor(dataAccess: IDataAccess) {
    this.dataAccess = dataAccess;

    this.postMessage = this.postMessage.bind(this);
  }

  async postMessage (req: Request, res: Response): Promise<void> {
    try {

    } catch (err: unknown) {
      console.log(err);
      res.sendStatus(500);
    }
  }
}