/*1. What is the Big O for this?
1) Determine the Big O for the following algorithm: You are sitting in a room with 15 people. 
You want to find a playmate for your dog, preferably of the same breed. 
So you want to know if anyone out of the 15 people have the same breed as your dog. 
You stand up and yell out, who here has a golden retriever and would like to be a playdate for my golden.
 Someone yells - "I do, be happy to bring him over" */

//Answer:
/*O(1) constant time= Because no matter how many people are in the group if the right person will always answer 
 then the question need to only be asked once */

/*2) Determine the Big O for the following algorithm: You are sitting in a room with 15 people.
 You want to find a playmate for your dog who is of the same breed. 
 So you want to know if anyone out of the 15 people have the same breed as your dog. 
 You start with the first person and ask him if he has a golden retriever. He says no, 
 then you ask the next person, and the next, and the next until you find someone who has a golden 
 or there is no one else to ask.*/

//Answer:
/*O(n) linear time. Because the search gets longer the bigger the input of people is*/

let people = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function findPlaymate(n, array) {
  let ticks = 0;
  for (let i = 0; i < array.length; i++) {
    ticks++;
    if (n === array[i]) {
      return {
        result: array[i],
        ticks: ticks
      };
    }
  }
  return {
    result: "none",
    ticks: ticks
  };
}

console.log(findPlaymate(0, people));
