import { Request, Response } from "express"

export interface ISkillsController {
  getSkills: (req: Request, res: Response) => Promise<void>
  getExperience: (req: Request, res: Response) => Promise<void>
}

export interface IAboutController {
  get: (req: Request, res: Response) => Promise<void>
}

export interface IPortfolioController {
  get: (req: Request, res: Response) => Promise<void>
}