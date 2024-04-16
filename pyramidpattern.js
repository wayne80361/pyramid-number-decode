// given a number array and turn it into a pyramid
// example, [1,2,3,4,5,6] will turn into
// [[1],[2,3],[4,5,6]]

// not sorted but still increment by 1 from 1
// example, [2,4,1,7,6,5,3,9,8,10] will turn into
// [[1],[2,3],[4,5,6],[7,8,9,10]]

// each number will pair with a word
// figure only the word on the right from top to bottom
// the pattern would be 1,3,6,10,15,21,28,36.....

// assume the pyramid has height on "n"
// this will figure out the number on the right side for a given n
function pyramidNumber(n) {
  return (n * (n + 1)) / 2;
}
