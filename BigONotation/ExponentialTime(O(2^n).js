/*Algorithms with exponential time complexity (O(2^n)) 
have running times that grow rapidly with any increase in input size. 
For an input of size 2, an exponential time algorithm will take 2^2 = 4 time.
With an input of size 10, the same algorithm will take 2^10 = 1024 time,
and with an input of size 100, it will take 2^100 = 1.26765060022823 * 1030 time. Yikes!
  
  The following countTriangle is meant to count the number of points in a triangle that looks like this:
                          *
                         * *
                       * * * *
                   * * * * * * * *
           * * * * * * * * * * * * * * * * 
        */

function countTriangle(layers) {
  let ticks = 1;
  let count = 0; // the number of dots we've counted so far
  let layer = 0; // the current layer we're on
  let lastLayer = 1; // the number of dots we counted in the previous layer
  while (layer < layers) {
    ticks++;
    let newLayer = 0; // the number of dots we've counted so far in the current layer
    for (let i = 0; i < lastLayer; i++) {
      ticks++;
      newLayer += 2;
    }
    lastLayer = newLayer;
    count += lastLayer;
    layer++;
  }
  return {
    result: count,
    ticks: ticks
  };
}

console.log(countTriangle(2));
console.log(countTriangle(4));
console.log(countTriangle(16));

/*In this algorithm, we count the number of dots in a triangle with a given number of layers. 
We start at the top layer of the triangle, which is the 0th layer and has 1 dot (or you can think of it as 2^0 = 1).
As you move to the next layer, the number of dots increases by a power of 2. So, in the 1st layer,
the dots you will count will be 2^1 = 2. In the 2nd layer, the number of dots will be 2^2 = 4.
By the time you're at the nth layer, the number of dots would be 2^n. 
therefore, as the input size increases, the number of operations to count the dots increases exponentially
making the running time of this algorithm O(2^n).*/
