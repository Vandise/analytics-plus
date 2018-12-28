export class InvalidDimensionError extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidDimensionError";
  }
}