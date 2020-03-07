/*7. Compute the sequence
What does the following algorithm do? What is its runtime complexity? Explain your answer */

//Answer
/*O(n) Linear time complexity.  Each operation runs once for each sequence*/

function compute(num) {
  let result = [];
  let ticks = 0;
  for (let i = 1; i <= num; i++) {
    if (i === 1) {
      ticks++;
      result.push(0);
    } else if (i === 2) {
      ticks++;
      result.push(1);
    } else {
      ticks++;
      result.push(result[i - 2] + result[i - 3]);
    }
  }
  return { result: result, ticks };
}

console.log(compute(100));
