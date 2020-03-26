const linkedList = require("./linkedlist");
const stack = require("./stack");

const wordOccurance = word => {
  //Split the phrase and remove non letter characters into an array
  let array = word.replace(/[^\w\s]|_/g, "").split(" ");
  console.log(array);

  //loop through the array and compare each word and count the number of occurence
  let output = {};
  array.forEach(word => {
    let count = 0;
    for (let j = 0; j < array.length; j++) {
      if (word === array[j]) {
        count++;
        output[word] = count;
      } else {
        output[word] = count;
      }
    }
  });
  //return as an object with the word : count for its key value pair
  return output;
};

const deleteDuplicates = (linkedList, node = linkedList.head) => {
  if (!node) {
    return linkedList;
  }
  //Loop through linkedlist and put values into array;
  let tempNode = node;
  let currValue = tempNode.value; //current value to compare
  let nextNode = tempNode.next;
  while (tempNode !== null) {
    tempNode = tempNode.next;
    if (tempNode === null) {
      break;
    }
    if (currValue === tempNode.value) {
      linkedList.remove(currValue);
    }
  }
  //move to next node to change current value
  if (nextNode) {
    deleteDuplicates(linkedList, nextNode);
  }
  return linkedList;
};

const numOfPalindromes = word => {
  let array = word.replace(/[^\w\s]|_/g, "").split(" ");
  let palinArr = [];
  let numOfPalin = 0;
  array.forEach(word => {
    if (isPalindrome(word)) {
      if (word.length > 1) {
        numOfPalin++;
        palinArr.push(word);
      }
    }
  });
  let result = "";
  palinArr.forEach(word => {
    result += `${word}, `;
  });
  return `${result} ${numOfPalin} Palindromes`;
};

const isPalindrome = s => {
  if (!s) {
    return;
  }
  const word = s
    .toLowerCase()
    .replace(/[^\w\s]|_/g, "")
    .split("");
  const wordStack = new stack();

  word.forEach(letter => {
    wordStack.push(letter);
  });

  let i = 0;
  while (wordStack.top !== null) {
    if (wordStack.top.data !== word[i]) {
      return false;
    }
    i++;
    wordStack.top = wordStack.top.next;
  }

  return true;
};

const compare = (l1, l2) => {
  let value = 0;
  let temp1 = l1.head;
  let temp2 = l2.head;

  if (l1.size() >= l2.size()) {
    while (temp1 !== null) {
      if (temp2) {
        if (temp1.value !== temp2.value) {
          if (l1.find(temp1.value) > l2.find(temp2.value)) {
            value = 1;
          } else {
            value = -1;
          }
        }
        temp1 = temp1.next;
        temp2 = temp2.next;
        continue;
      }
      temp1 = temp1.next;
      value = 1;
    }

    if (l1.findLast().value === l2.findLast().value) {
      return (value = 0);
    }
  }
  if (l1.size() < l2.size()) {
    while (temp2 !== null) {
      if (temp1) {
        if (temp2.value !== temp1.value) {
          if (l1.find(temp1.value) > l2.find(temp2.value)) {
            value = 1;
          } else {
            value = -1;
          }
        }
        temp1 = temp1.next;
        temp2 = temp2.next;
        continue;
      }
    }
  }
  //if values match return 0
  //when values dont match then end loop
  //find size, if l1 greater than l2 return 1
  //if equal size compare last values
  //if l1 greater return 1
  //else return -1
  return value;
};

const modeNFreq = list => {};

function main() {
  //practice 1
  console.log(
    wordOccurance(
      "Hello there, how are you? Can you tell me how to get to the nearest Starbucks?"
    )
  );

  //practice 2
  let LL = new linkedList();
  const names = [
    "clark",
    "clark",
    "anthony",
    "joel",
    "sara",
    "jan",
    "hello",
    "foo",
    "sara",
    "anthony"
  ];
  names.forEach(name => LL.insertLast(name));
  deleteDuplicates(LL);
  LL.display();

  //practice 3
  console.log(numOfPalindromes("Dad gave mom a Tesla as a racecar"));

  //practice 4
  let ll1 = new linkedList();
  let ll2 = new linkedList();
  let ll3 = new linkedList();
  let ll4 = new linkedList();
  let ll5 = new linkedList();
  let ll6 = new linkedList();

  //input 1
  let list1 = ["B", "i", "l", "b", "o", "a"];
  let list2 = ["B", "i", "l", "b", "o"];

  list1.forEach(let => {
    ll1.insertLast(let);
  });

  list2.forEach(let => {
    ll2.insertLast(let);
  });

  console.log(compare(ll1, ll2));

  list1 = ["B", "i", "l", "b", "o"];
  list2 = ["B", "i", "l", "b", "o"];

  list1.forEach(let => {
    ll3.insertLast(let);
  });

  list2.forEach(let => {
    ll4.insertLast(let);
  });

  console.log(compare(ll3, ll4));

  list1 = ["B", "i", "l", "b", "o", "a"];
  (list2 = ["B", "i", "l", "b", "o"]), "b";

  list1.forEach(let => {
    ll5.insertLast(let);
  });

  list2.forEach(let => {
    ll6.insertLast(let);
  });

  console.log(compare(ll5, ll6));
}

main();
