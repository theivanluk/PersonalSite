import { IDataAccess } from "../Entities/dataAccess";
import { ISkillsController } from "../Entities/controllers";

export class SkillsController implements ISkillsController {
  private dataAccess: IDataAccess;

  constructor(dataAccess: IDataAccess) {
    this.dataAccess = dataAccess;
  }

  async get(): Promise<void> {

  }
}