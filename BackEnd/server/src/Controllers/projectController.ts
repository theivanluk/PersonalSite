import { Request, Response } from "express";
import IProjectController from "@/Entities/ControllerEntities/iProjectController";
import IDataAccess from "@/DataAccess/iDataAccess";
import { allProjectFields, ProjectFields, ProjectsModel } from "./../Entities/DatabaseTypes";
import { ValidationError, QueryError, handleControllerError } from "./../Entities/ErrorEntities";

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

  private validateProjectsModel(input: any): input is ProjectsModel {
    return (
      (input as ProjectsModel).project_name === 'string' &&
      (input as ProjectsModel).project_description === 'string' &&
      (input as ProjectsModel).project_pic === 'string' &&
      (input as ProjectsModel).project_url === 'string' &&
      (input as ProjectsModel).project_updated === 'string'
    );
  }

  private validateProjectField(input: any): input is ProjectFields {
    return allProjectFields.includes(input as ProjectFields);
  }

  public async getProjects(req: Request, res: Response): Promise<void> {
    try {
      const { page } = req.query;
      if (isNaN(Number(page))) throw new ValidationError();
      const data = await this.dataAccess.getProjects(Number(page));
      res.status(200).json(data);
    } catch(err) {
      handleControllerError(err, res);
    }
  }

  public async getProjectById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      if (isNaN(Number(id))) throw new ValidationError();
      const data = await this.dataAccess.getProject(Number(id));
      if (data.length === 0) throw new QueryError()
      res.status(200).json(data);
    } catch(err) {
      handleControllerError(err, res);
    }
  }

  public async insertProject(req: Request, res: Response): Promise<void> {
    try {
      if (!this.validateProjectsModel(req.body)) throw new ValidationError();
      await this.dataAccess.insertProject(req.body);
      res.sendStatus(200);
    } catch(err) {
      handleControllerError(err, res);
    }
  }

  public async updateProject(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const { field, data } = req.body;
      if (
        isNaN(Number(id)) ||
        this.validateProjectField(field) ||
        typeof data !== 'string'
      ) throw new ValidationError();
      this.dataAccess.updateProject(Number(id), field, data);
      res.sendStatus(200);
    } catch(err) {
      handleControllerError(err, res);
    }
  }

  public async deleteProject(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      if (isNaN(Number(id))) throw new ValidationError();
      await this.dataAccess.deleteProject(Number(id));
      res.sendStatus(200);
    } catch(err) {
      handleControllerError(err, res);
    }
  }
}