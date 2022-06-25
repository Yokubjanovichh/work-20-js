"use strict";

let thief = {
  jacket: "black",
  heigt: 1.7,
  colors: {
    hair: "yellow",
    style: "curly",
  },
};

// delete thief.jacket;
// console.log(thief);

// console.log(Object.keys(thief));
console.log(Object.keys(thief).length); // obyekt uzinliginio kursatadi;

for (let key in thief) {
  if (thief[key] === "Object") {
    for (let i in thief[key]) {
      console.log(`Property ${i} has been ${thief[key][i]}`);
    }
  } else {
    console.log(`Property ${key} has been ${thief[key]}`);
  }
}
