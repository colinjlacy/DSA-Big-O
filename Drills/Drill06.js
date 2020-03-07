/*6. Creating pairs:
What is the Big O of the following algorithm? Explain your answer */

//Answer:
// /*O(n^k) PolynomialTime complexity. Because it uses a nested loop */

function createPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr[i] + ", " + arr[j]);
    }
  }
}

createPairs([1, 2, 3, 4, 5]);
