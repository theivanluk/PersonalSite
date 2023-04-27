import { IDataAccess } from "../Entities/dataAccess";
import { ISkillsController } from "../Entities/controllers";
import { Request, Response } from "express";

export class SkillsController implements ISkillsController {
  private dataAccess: IDataAccess;

  constructor(dataAccess: IDataAccess) {
    this.dataAccess = dataAccess;

    this.getSkills = this.getSkills.bind(this);
    this.getExperience = this.getExperience.bind(this);
  }

  async getSkills(req: Request, res: Response): Promise<void> {
    try {
      const skillsData = await this.dataAccess.getSkills();
      res.status(200).json(skillsData);
    } catch (err: unknown) {
      console.log(err);
      res.status(500).json([]);
    }
  }

  async getExperience(req: Request, res: Response): Promise<void> {
    try {
      const experienceData = await this.dataAccess.getExperience();
      res.status(200).json(experienceData);
    } catch (err: unknown) {
      console.log(err);
      res.status(500).json([]);
    }
  }
}