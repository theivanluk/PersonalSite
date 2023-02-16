import IDataAccess from "@/DataAccess/iDataAccess"
import { Request, Response } from "express";


export default interface IAboutMeController {
  async getAboutMe(req: Request, res: Response): Promise<void>;
  async insertAboutMe(req: Request, res: Response): Promise<void>;
  async updateAboutMe(req: Request, res: Response): Promise<void>;
  async deleteAboutMe(req: Request, res: Response): Promise<void>;
}