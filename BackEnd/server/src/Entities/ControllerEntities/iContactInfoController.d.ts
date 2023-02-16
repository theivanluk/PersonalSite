import { Request, Response } from "express";
import { insert } from "../queryModel";

export default interface IContactInfoController {
  async getContactInfo(req: Request, res: Response): Promise<void>;
  async insertContactInfo(req: Request, res: Response): Promise<void>;
  async updateContactInfo(req: Request, res: Response): Promise<void>;
  async deleteContactInfo(req: Request, res: Response): Promise<void>;
}