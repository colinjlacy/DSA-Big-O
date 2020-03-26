/*11. Tower of Hanoi
The Tower of Hanoi is a very famous mathematical puzzle (some call it game!). This is how it goes:

There are three rods and a number of disks of different sizes which can slide onto any rod. 
The puzzle starts with the disks neatly stacked in ascending order of size on one rod, 
the smallest disk at the top (making a conical shape). The other two rods are empty to begin with.

The goal of the puzzle is to move the entire stack of rods to another rod 
(can't be the original rod where it was stacked before) where it will be stacked 
in the ascending order as well. This should be done obeying the following rules:
i) Only one disk may be moved at a time ii)
Each move consists of taking the upper disk from one of the rods and sliding it onto another rod, 
on top of the other disks that may already be present on that rod. iii) 
A larger disk may not placed on top of a smaller disk*/

//test push

const small = [1];
const medium = [2, 2];
const large = [3, 3, 3];

const rodA = [small, medium, large];
const rodB = [];
const rodC = [];

const hanoi = () => {
  console.log("put small on rodC from rodA");
  rodC.unshift(rodA[0]);
  rodA.shift();
  console.log("rodC ", rodC);

  console.log("put medium on rodB from rodA");
  rodB.unshift(rodA[0]);
  rodA.shift();
  console.log("rodB ", rodB);

  console.log("put small on top of rodB from rodC");
  rodB.unshift(rodC[0]);
  rodC.shift();
  console.log("rodB", rodB);

  console.log("put large on top of rodC from rodA");
  rodC.unshift(rodA[0]);
  rodA.shift();
  console.log("rodC", rodC);

  console.log("put small on top of rodA from robB");
  rodA.unshift(rodB[0]);
  rodB.shift();
  console.log("rodA", rodA);

  console.log("put medium on top of rodC from rodB");
  rodC.unshift(rodB[0]);
  rodB.shift();
  console.log("rodC", rodC);

  console.log("put small on top of rodC from rodA");
  rodC.unshift(rodA[0]);
  rodA.shift();

  for (let i = 0; i < rodC.length; i++) {
    console.log(rodC[i]);
  }
  
  //comment
};

hanoi();
