import { Request, Resposne } from "express";

export default interface IProjectController {
  async getProjects(req: Request, res: Response): Promise<void>;
  async getProjectById(req: Request, res: Response): Promise<void>;
  async insertProject(req: Request, res: Response): Promise<void>;
  async updateProject(req: Request, res: Response): Promise<void>;
  async deleteProject(req: Request, res: Response): Promise<void>;
}