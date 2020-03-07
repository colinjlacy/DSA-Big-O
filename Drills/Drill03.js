/*3. Are you here?
What is the Big O of the following algorithm? Explain your answer */

//Answer
/*O(n^k) PolynomialTime complexity. Because it requires a nested loop */

function areYouHere(arr1, arr2) {
  let result = false;
  let ticks = 0;
  for (let i = 0; i < arr1.length; i++) {
    const el1 = arr1[i];
    ticks++;
    for (let j = 0; j < arr2.length; j++) {
      const el2 = arr2[j];
      ticks++;
      if (el1 === el2) result = true;
    }
  }
  return {
    result: result,
    ticks: ticks
  };
}

console.log(areYouHere([1, 2, 3, 4, 5], [6, 7, 1, 8, 9]));
