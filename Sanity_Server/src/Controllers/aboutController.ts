import { IAboutController } from "../Entities/controllers";
import { IDataAccess } from "../Entities/dataAccess";

export class AboutController implements IAboutController {
  private dataAccess: IDataAccess;

  constructor(dataAccess: IDataAccess) {
    this.dataAccess = dataAccess;
  }

  async get(): Promise<void> {

  }
}