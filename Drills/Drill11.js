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

const small = 1;
const medium = 2;
const large = 3;
const target = [small, medium, large];

const rods = [
	[small, medium, large],
	[],
	[]
];

let lastMovedDisk;
let currentRod = 0;
let direction = "right";

const hanoi = () => {

};

function isLimit(index) {
	return index === 0 || index === rods.length - 1;
}

function setLastMoved(disk) {
	lastMovedDisk = disk;
}

function canMoveToStack(disk, stack) {
	return disk < stack[0];
}

//COMMENT???

hanoi();
