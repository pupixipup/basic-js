const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
// class DepthCalculator {
//   calculateDepth(arr) {
//     let counter = 1;
//   }
// }
class DepthCalculator {

  calculateDepth(arr) {
   let a = [];
   let counter = 1;
  for (let i of arr) {
  if (Array.isArray(i)) {
  counter += Math.max(counter, this.calculateDepth(i)) 
  a.push(counter);
  counter = 1;
  }
 
  }
  let max = Math.max(...a);
  if (max < 1) return 1;
  return max;
  }
}

module.exports = {
  DepthCalculator
};
