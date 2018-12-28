import { InvalidDimensionError } from './errors';

export const INVALID_DIMENSION = 'INVALID';
export const dimensions = [ INVALID_DIMENSION ];

export function isValid(dimension) {
  return exports.dimensions.indexOf(dimension) < 0;
}

export function register(dimension) {
  if (exports.isValid(dimension)) {
    return (exports.dimensions.push(dimension)) - 1;
  }
  throw new InvalidDimensionError(`Dimension ${dimension} has already been registered.`);
} 