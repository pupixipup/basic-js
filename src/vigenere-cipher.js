const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(type = true) {
    this.type = type;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }

    let spaces = [];
    message.split("").forEach(function (item, index) {
      if (item == " ") {
        spaces.push(index);
      }
    });
    // Save Spaces

    message = message.toUpperCase();

    key = key.toUpperCase();
    let alphabet = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    // Creating a Key Word
    let keyWord = "";
    message = message.replace(/\s/g, "");
    // remove all spaces
    while (keyWord.length < message.length) {
      keyWord += key;
    }
    keyWord = keyWord.split("");
    while (keyWord.length > message.length) {
      keyWord.pop();
    }
    keyWord = keyWord.join("");
    // Creating a Key Word

    let arr = [];
    let encryptedChar = "";
    for (let i = 0; i < message.length; i++) {
      arr.push((message[i].charCodeAt(0) + keyWord[i].charCodeAt(0) + 26) % 26);
      if (!alphabet.includes(message[i].toLowerCase())) {
        encryptedChar += message[i];
      } else {
        encryptedChar +=
          alphabet[(message[i].charCodeAt(0) + keyWord[i].charCodeAt(0)) % 26];
        encryptedChar = encryptedChar.toUpperCase();
      }
    }
    encryptedChar = encryptedChar.split("");
    for (let space of spaces) {
      encryptedChar.splice(space, 0, " ");
    }

    if (this.type) {
      return encryptedChar.join("");
    }
    return encryptedChar.reverse().join("");

    // Add all removed spaces
  }

  decrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }

    let spaces = [];
    message.split("").forEach(function (item, index) {
      if (item == " ") {
        spaces.push(index);
      }
    });
    
    // Save Spaces

    message = message.replace(/\s/g, "");
    // remove all spaces

    message = message.toUpperCase();
    key = key.toUpperCase();
    let alphabet = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    // Creating a Key Word
    let keyWord = "";
    while (keyWord.length < message.length) {
      keyWord += key;
    }
    keyWord = keyWord.split("");
    while (keyWord.length > message.length) {
      keyWord.pop();
    }
    keyWord = keyWord.join("");
    /* return keyWord; */
    // Creating a Key Word
    let encryptedChar = "";
    for (let i = 0; i < message.length; i++) {
      if (!alphabet.includes(message[i].toLowerCase())) {
        encryptedChar += message[i];
      } else {
        encryptedChar +=
          alphabet[
            (message[i].charCodeAt(0) - keyWord[i].charCodeAt(0) + 26) % 26
          ];
        encryptedChar = encryptedChar.toUpperCase();
      }
    }
    encryptedChar = encryptedChar.split("");
    for (let space of spaces) {
      encryptedChar.splice(space, 0, " ");
    }

    if (this.type) {
      return encryptedChar.join("");
    }
    return encryptedChar.reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine,
};
