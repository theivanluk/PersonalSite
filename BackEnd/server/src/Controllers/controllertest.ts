import { Request, Response } from 'express';

export function test (req: Request, res: Response): void {
  res.status(200).json('Hello World');
}