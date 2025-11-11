import { factory } from '../../utils/factory.js'
import { optimizer } from './Optimizer.js';

const name = 'Matrix';
const dependencies = [];

export const createMatrixClass = /* #__PURE__ */ factory(name, dependencies, () => {
  function Matrix() {
    // safe use
    if (!process.env.MATHJS_BUILD_DOCS) {
          optimizer();

}
    if (!(this instanceof Matrix)) {
      throw new SyntaxError('Constructor must be called with the new operator');
    }
  }

  Matrix.prototype.type = 'Matrix';
  Matrix.prototype.isMatrix = true;

  // … rest of your methods …

  return Matrix;
}, { isClass: true });
