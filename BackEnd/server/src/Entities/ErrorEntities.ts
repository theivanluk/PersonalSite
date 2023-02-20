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

export class AuthorizationError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = "AuthorizationError";
  }
}

export class ForbiddenError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = "ForbiddenError";
  }
}

export class AuthenticationError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = "AuthenticationError";
  }
}

export function handleControllerError(err: Error | any, res: Response): void {
  if (err instanceof ValidationError) {
    res.sendStatus(400);
  } else
  if (err instanceof QueryError) {
    res.sendStatus(204);
  } else
  if (err instanceof AuthorizationError) {
    res.sendStatus(401);
  } else
  if (err instanceof ForbiddenError) {
    res.sendStatus(403);
  } else
  if (err instanceof AuthenticationError) {
    // res.redirect('/auth/login');
    res.sendStatus(401);
  }
  else {
    res.sendStatus(500);
  }
}