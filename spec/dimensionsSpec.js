import { InvalidDimensionError } from '../src/errors';

describe('Dimensions', () => {

  let dimensionModule;

  beforeEach(() => {
    dimensionModule = require('../src/dimensions');
    td.replace(dimensionModule, 'dimensions', ['INVALID']);
  });

  afterEach(() => {
    td.reset();
  });

  describe('.isValid', () => {
    describe('when the dimension is not present', () => {
      it('returns true', () => {
        expect(dimensionModule.isValid('NOT_ADDED_DIMENSION')).to.equal(true);
      });
    });

    describe('when the dimension has already been added', () => {
      beforeEach(() => {
        dimensionModule.register('ADDED_DIMENSION');
      });
  
      it('returns false', () => {
        expect(dimensionModule.isValid('ADDED_DIMENSION')).to.equal(false);
      });
    });
  });

  describe('.register', () => {
    describe('when a dimension has not been registered', () => {
      it('is pushed to the dimensions array', () => {
        dimensionModule.register('NEW_DIMENSION');
        expect(dimensionModule.dimensions.indexOf('NEW_DIMENSION')).to.equal(1);
      });

      it('returns the index of the dimension', () => {
        expect(dimensionModule.register('NEW_DIMENSION')).to.equal(1);        
      });
    });

    describe('when a dimension has already been registered', () => {
      beforeEach(() => {
        dimensionModule.register('ADDED_DIMENSION');
      });

      it('throws an InvalidDimensionError', () => {
        expect(() => dimensionModule.register('ADDED_DIMENSION')).to.throw().and.to.have.property(
          'name', 'InvalidDimensionError'
        );
      });

      it('states the dimension has already been added', () => {
        const MSG = 'Dimension ADDED_DIMENSION has already been registered.';
        expect(() => dimensionModule.register('ADDED_DIMENSION')).to.throw().and.to.have.property(
          'message', MSG
        );
      });
    });
  });
});