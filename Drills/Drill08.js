/* 8. An efficient search
In this example, we return to the problem of searching using a more 
sophisticated approach than in naive search, above.
 Assume that the input array is always sorted. What is the Big O of the following algorithm? Explain your answer */

//Answer
/*O(log(n)) */

function efficientSearch(array, item) {
  let minIndex = 0;
  let maxIndex = array.length - 1;
  let currentIndex;
  let currentElement;
  let ticks = 0;

  while (minIndex <= maxIndex) {
    currentIndex = Math.floor((minIndex + maxIndex) / 2);
    currentElement = array[currentIndex];

    if (currentElement < item) {
      ticks++;
      minIndex = currentIndex + 1;
    } else if (currentElement > item) {
      ticks++;
      maxIndex = currentIndex - 1;
    } else {
      ticks++;
      return { result: currentIndex, ticks: ticks };
    }
  }
  return { result: -1, ticks: ticks };
}

console.log(efficientSearch([1, 2, 3, 4, 5], 6));
