import { Request, Response } from "express";
import { IPortfolioController } from "../Entities/controllers";
import { IDataAccess } from "../Entities/dataAccess";
import { urlFor } from "../SanityDB/sanityClient";

export class PortfolioController implements IPortfolioController {
  private dataAccess: IDataAccess;

  constructor(dataAccess: IDataAccess) {
    this.dataAccess = dataAccess;

    this.get = this.get.bind(this);
  }

  async get(req: Request, res: Response): Promise<void> {
    try {
      const portfolioData = await this.dataAccess.getWorks();
      const modifiedPortfolioData = portfolioData.map((data) => { return { ...data, imgUrl: urlFor(data.imgUrl) } })
      res.status(200).json(modifiedPortfolioData);
    } catch (err: unknown) {
      res.status(500).json([]);
    }
  }
}