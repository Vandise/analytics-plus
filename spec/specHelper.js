import chaiAsPromised from "chai-as-promised";
import chaiString from "chai-string";
import sinonChai from "sinon-chai";
import sinon from "sinon";
import chai from "chai";
import td from "testdouble";

global.window = {};

// Assertion and stubbing utilities
chai.use(sinonChai);
chai.use(chaiAsPromised);
chai.use(chaiString);
global.expect = chai.expect;
global.sinon = sinon;
global.chai = chai;
global.td = td;