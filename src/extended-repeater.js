const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(
  str, 
  options = { repeatTimes: 1, separator: '+', addition: '', additionRepeatTimes: 0, additionSeparator: '' }) 
  {
  const defaultOptions = Object.assign({repeatTimes: 1, separator: '+', addition: '', additionRepeatTimes: 1, additionSeparator: ''}, options);
  
  let word = [];
  
  for (let i = 0; i < defaultOptions.repeatTimes; i++) {
  word.push(str.toString())
    for (let j = 0; j < defaultOptions.additionRepeatTimes; j++) {
    word.push(defaultOptions.addition.toString())
    if (j != defaultOptions.additionRepeatTimes - 1) {
    word.push(defaultOptions.additionSeparator.toString())
    }
    }
    word.push(defaultOptions.separator.toString())
    }
    if(word[word.length - 1] == defaultOptions.separator) {
    word.pop();
    }
    if(word[word.length - 1] == defaultOptions.additionSeparator) {
    word.pop();
    }
    return word.join('');
  }
  



module.exports = {
  repeater
};
