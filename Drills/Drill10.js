/*10. What Am I?
What does the following algorithm do? What is the Big O of the following algorithm? Explain your answer */

//Answer:
/* function checks if input is not divisible by any number(true) else it is false
(O(n)) Linear time complexity
*/

function isWhat(n) {
  let ticks = 0;
  if (n < 2 || n % 1 != 0) {
    ticks++;
    return { result: false, ticks: ticks };
  }
  for (let i = 2; i < n; ++i) {
    ticks++;
    console.log(i);
    if (n % i == 0) return { result: false, ticks: ticks };
  }
  return { result: true, ticks: ticks };
}

console.log(isWhat(17));
