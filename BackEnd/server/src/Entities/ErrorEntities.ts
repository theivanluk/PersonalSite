import { Response } from 'express';
import { Query } from 'pg';

export class ValidationError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = "ValidationError";
  }
}

export class QueryError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = "QueryError";
  }
}

export function handleControllerError(err: Error | any, res: Response): void {
  if (err instanceof ValidationError) {
    res.sendStatus(400);
  } else
  if (err instanceof QueryError) {
    res.sendStatus(204);
  } else {
    res.sendStatus(500);
  }
}