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
