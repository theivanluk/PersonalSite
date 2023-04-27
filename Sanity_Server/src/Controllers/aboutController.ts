import { Request, Response } from "express";
import { IAboutController } from "../Entities/controllers";
import { IDataAccess } from "../Entities/dataAccess";

export class AboutController implements IAboutController {
  private dataAccess: IDataAccess;

  constructor(dataAccess: IDataAccess) {
    this.dataAccess = dataAccess;
  }

  async get(req: Request, res: Response): Promise<void> {
    try {
      const aboutData = await this.dataAccess.getAbout();
      res.status(200).json(aboutData);
    } catch(err: unknown) {
      res.status(500).json([]);
    }
  }
}