import { IPortfolioController } from "../Entities/controllers";
import { IDataAccess } from "../Entities/dataAccess";

export class PortfolioController implements IPortfolioController {
  private dataAccess: IDataAccess;

  constructor(dataAccess: IDataAccess) {
    this.dataAccess = dataAccess;
  }

  async get(): Promise<void> {

  }
}