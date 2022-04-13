const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  n = n.toString().split('');
  let variations = [];
  for(let i = 0; i < n.length; i++) {
  let a = [...n];
  let newArr = a.splice(i, 1);
  variations.push(+a.join(''));
  }
    
   return Math.max(...variations);
 }


module.exports = {
  deleteDigit
};
