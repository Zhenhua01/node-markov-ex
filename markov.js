"use strict";

/** Textual markov chain generator. */


class MarkovMachine {

  /** Build markov machine; read in text.*/

  constructor(text) {
    // A "word" will also include any punctuation around the word, so this will
    // include things like "The", "cat", "cat.".
    this.words = text.split(/[ \r\n]+/);
    this.chains = this.getChains();
  }

  /** Get markov chain: returns Map of Markov chains.
   *
   *  For text of "The cat in the hat.", chains will be:
   *
   *  {
   *   "The": ["cat"],
   *   "cat": ["in"],
   *   "in": ["the"],
   *   "the": ["hat."],
   *   "hat.": [null],
   *  }
   *
   * */

  getChains() {
    let chains = new Map();

    for (let i = 0; i < this.words.length; i++) {

      if (chains.has(this.words[i])){
        chains.get(this.words[i]).push(this.words[i+1] || null)
      } else {
        chains.set(this.words[i], [this.words[i+1] || null])
      }
    }

    return chains;
  }


  /** Return random text from chains, starting at the first word and continuing
   *  until it hits a null choice. */

  getText() {
    // - start at the first word in the input text
    // - find a random word from the following-words of that
    // - repeat until reaching the terminal null

    let currWord = this.words[0];
    let output = currWord;

    while (currWord != null) {
      const wordList = this.chains.get(currWord);
      debugger;

      currWord = wordList[Math.floor(Math.random() * wordList.length)];

      if (currWord != null) {
        output += ` ${currWord}`;
      }
    }

    return output;
  }
}

module.exports = {
  MarkovMachine,
}
