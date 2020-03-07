/*4. Doubler
What is the Big O of the following algorithm? Explain your answer */

//Answer
/*O(1) constant time complexity. Because no matter how big the input gets the number of run time remains consistent.
it takes 1 run per 1 operation */

function doubleArrayValues(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] *= 2;
  }
  return array;
}

console.log(doubleArrayValues([1, 2, 3, 4, 5]));
