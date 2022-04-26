const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {

  str = str.split('');
  let string = '';
  let counter = 1;
  for (let i = 0; i < str.length; i++) {
  if (str[i] == str[i+1]) {
    counter = counter + 1;
  }
  else if(str[i] != str[i+1]) {
  
  let count = (counter > 1) ? counter: '';
  string += count + str[i];
  counter = 1;
  }
  }
  return string;
  }
  

module.exports = {
  encodeLine
};
