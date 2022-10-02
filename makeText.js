"use strict";

/** Command-line tool to generate Markov text. */

const fsP = require("fs/promises");

const {MarkovMachine} = require('./markov');

// const catInHatMachine = new MarkovMachine("The cat is in the hat. The cat is the cat. The hat is a cat.");
const catInHatMachine = new MarkovMachine("The cat in the hat.");
console.log("this.words result:", catInHatMachine.words);
console.log("this.chains result:", catInHatMachine.chains);
console.log("getText() result:", catInHatMachine.getText());


async function readMyFile(fileName) {
  try {
    const contents = await fsP.readFile(fileName, "utf8");
    return contents
  } catch (err) {
    process.exit(1);
  }
}

async function generateMarkov(){
  const text = await readMyFile("eggs.txt");
  const eggsMarkov = new MarkovMachine(text);
  // console.log(eggsMarkov.chains);
  // console.log(eggsMarkov.getText());
}

generateMarkov();

