import { Request, Response } from "express";
import { IPortfolioController } from "../Entities/controllers";
import { IDataAccess } from "../Entities/dataAccess";

export class PortfolioController implements IPortfolioController {
  private dataAccess: IDataAccess;

  constructor(dataAccess: IDataAccess) {
    this.dataAccess = dataAccess;
  }

  async get(req: Request, res: Response): Promise<void> {
    try {
      const portfolioData = await this.dataAccess.getWorks();
      res.status(200).json(portfolioData);
    } catch (err: unknown) {
      res.status(500).json([]);
    }
  }
}