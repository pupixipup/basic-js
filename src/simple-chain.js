const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
	linkArray: [],
  getLength() {
  	return this.linkArray.length;
  },
  addLink(value) {
     if (arguments) {
    this.linkArray.push(String(value));
    }
  
    return this;
  },
  removeLink(position) {
  	if (typeof position === 'number' 
				&& Number.isInteger(position)
        && position > 0
				&& position < this.linkArray.length + 1
        && arguments.length == 1
				&& Number.isSafeInteger(position)) {
 		this.linkArray.splice(position - 1, 1)
    return this
    }
    
    else  {
      this.linkArray = [];
      throw new Error('You can\'t remove incorrect link!')};
  },
  reverseChain() {
		this.linkArray.reverse();
    return this;
  },
  finishChain() {
  let linkArrayCopy = this.linkArray;
  this.linkArray = [];
	let finalChain = linkArrayCopy.map((currentValue, index) => {
  if(index != linkArrayCopy.length - 1) {
  return `( ${currentValue} )~~`} else {
  return  `( ${currentValue} )`
  }
  });
  return finalChain.join('');
  }
};





module.exports = {
  chainMaker
};
