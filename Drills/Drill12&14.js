//Counting sheep
//O(n) Linear time

const countingSheep = input => {
  for (let i = 0; i <= input; input--) {
    if (i === input) {
      return console.log(input, ": Another sheep jumps over the fence");
    }
    console.log(input, ": All sheep jumps over the fence");
  }
};

countingSheep(3);

//Power Calculator
//O(n) Linear time

const poweCalculator = (val, exp) => {
  let value = val;
  if (exp <= 0) {
    return console.log("Exponent should be >= 0");
  }
  for (let i = 1; i <= exp; exp--) {
    if (i === exp) {
      return value;
    }

    value *= val;
  }
};

console.log(poweCalculator(10, 3));

//ReverseString
//O(n) Linear constant time

const reversString = input => {
  let newString = "";
  for (let i = input.length - 1; i >= 0; i--) {
    newString += input[i];
  }

  return newString;
};

console.log(reversString("Hello"));

//Fibonacci Sequence
//O(n) Linear time

const fib = n => {
  let a = 0,
    b = 1,
    c = 0;
  for (let i = 2; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
    console.log(b);
  }
  return b;
};

console.log("fibonacci", fib(9));

//Factorial
//O(n) Linear time

const factorial = n => {
  let facto = 1;
  for (let i = n; i >= 1; i--) {
    facto *= n;
    n--;
  }
  return facto;
};

console.log(factorial(6));
