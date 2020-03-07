/*9. Random element
What is the Big O of the following algorithm? Explain your answer*/

//Answer
/*O(1) Constant time complexity. No matter the size of your input, the algorithm will take the same amount of time to complete */

function findRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

console.log(findRandomElement([1, 3, 5, 7, 4, 2]));
