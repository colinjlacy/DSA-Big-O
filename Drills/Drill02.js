/*2. Even or odd
What is the Big O of the following algorithm? Explain your answer*/

function isEven(value) {
  if (value % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

//Answer:
/*O(1) constant time because the function only runs once to check the value, 
it doesn't need to run more than once to find a certain value, its just either true or false */
