export class ValidationError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = "ValidationError";
  }
}

export class QueryError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = "QueryErro";
  }
}