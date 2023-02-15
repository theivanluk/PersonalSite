import { Request, Response } from "express";
import IProjectController from "@/Entities/ControllerEntities/iProjectController";
import IDataAccess from "@/DataAccess/iDataAccess";

export default class ProjectController implements IProjectController {
  private dataAccess: IDataAccess;

  constructor (dataAccess: IDataAccess) {
    this.dataAccess = dataAccess;

    this.getProjects = this.getProjects.bind(this);
    this.getProjectById = this.getProjectById.bind(this);
    this.insertProject = this.insertProject.bind(this);
    this.updateProject = this.updateProject.bind(this);
    this.deleteProject = this.deleteProject.bind(this);
  }

  async getProjects(req: Request, res: Response): Promise<void> {
    try {
      const { page } = req.query;
      if (isNaN(Number(page))) throw Error();
      const data = await this.dataAccess.getProjects(Number(page));
      res.status(200).json(data);
    } catch(err) {

    }
  }

  async getProjectById(req: Request, res: Response): Promise<void> {
    try {

    } catch(err) {

    }
  }

  async insertProject(req: Request, res: Response): Promise<void> {
    try {

    } catch(err) {

    }
  }

  async updateProject(req: Request, res: Response): Promise<void> {
    try {

    } catch(err) {

    }
  }

  async deleteProject(req: Request, res: Response): Promise<void> {
    try {

    } catch(err) {

    }
  }
}