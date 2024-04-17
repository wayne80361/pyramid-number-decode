// decode from a txt file
const fs = require("fs");

// function to calculate pyramid numbers
function pyramidNumber(n) {
  return (n * (n + 1)) / 2;
}

// function to read the message file and find the maximum pyraamid number
function findMaxpyramidNumber(messageFilePath) {
  let txtContent = fs.readFileSync(messageFilePath, "utf8");

  // split the conent into lines
  let lines = txtContent.trim().split("\n");

  // map line entries to objects containing number and word
  let entries = lines.map((line) => {
    let [number] = line.trim().split(" ");
    return parseInt(number);
  });

  //   find the maximum number
  let maxNumber = Math.max(...entries);

  // calculate the maximum pyramid number
  let n = 1;
  while (pyramidNumber(n) <= maxNumber) {
    n++;
  }
  return pyramidNumber(n - 1);
}

// function to generate the pattern based on the maximum pyramid number
function generatePattern(maxPyramidNumber) {
  let pattern = [];
  let n = 1;
  while (pyramidNumber(n) <= maxPyramidNumber) {
    pattern.push(pyramidNumber(n));
    n++;
  }
  return pattern;
}

// function to read the txt file and find the paired word
function findPairedWords(messageFilePath, pattern) {
  let txtContent = fs.readFileSync(messageFilePath, "utf8");
  // split the file content into lines
  let lines = txtContent.trim().split("\n");

  // map line entries to objects containing number and word
  let entries = lines.map((line) => {
    let [number, word] = line.trim().split(" ");
    return { number: parseInt(number), word };
  });

  // sort entries by number
  entries.sort((a, b) => a.number - b.number);

  // array to store the paired words
  let pairedWords = [];

  // find the paired word for each triangular number in the pattern
  pattern.forEach((num) => {
    let entry = entries.find((e) => e.number === num);
    if (entry) {
      pairedWords.push(entry.word);
    }
  });

  return pairedWords;
}

function test1() {
  // test
  let messageFilePath = "encoded_message.txt"; // path to your message file
  let maxTriangularNumber = findMaxpyramidNumber(messageFilePath);
  let pattern = generatePattern(maxTriangularNumber);

  // find the paired words in the message file based on the pattern
  let pairedWords = findPairedWords(messageFilePath, pattern);

  // display the paired words
  console.log(pairedWords);
}

function test2() {
  // test 2
  let messageFilePath = "encoded_msg2.txt"; // path to your message file
  let maxTriangularNumber = findMaxpyramidNumber(messageFilePath);
  let pattern = generatePattern(maxTriangularNumber);

  // find the paired words in the message file based on the pattern
  let pairedWords = findPairedWords(messageFilePath, pattern);

  // display the paired words
  console.log(pairedWords);
}

test1();
test2();
