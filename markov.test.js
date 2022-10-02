"use strict";

const {MarkovMachine} = require('./markov');

describe("markov chains", function () {
  let text;
  let catInHatMachine;

  beforeAll(function () {
    text = "The cat in the hat.";
    catInHatMachine = new MarkovMachine(text)
  });

  test("MarkovMachine class .words", function () {
    expect(catInHatMachine.words).toEqual(['The', 'cat', 'in', 'the', 'hat.']);
  });

  // test("Markov chain is a Map", function () {
  //   expect(catInHatMachine.chains).toEqual(expect.any(Map));
  // });

  test("Markov chain map", function () {
    expect(Object.fromEntries(catInHatMachine.chains)).toEqual({
      "The": ["cat"],
      "cat": ["in"],
      "in": ["the"],
      "the": ["hat."],
      "hat.": [null],
    });
  });

  test("Markov chain output text", function () {
    expect(catInHatMachine.getText()).toEqual("The cat in the hat.");
  });

});
