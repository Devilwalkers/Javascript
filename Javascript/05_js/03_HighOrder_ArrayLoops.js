// forof loop

// ["","",""]
// [{},{},{}]

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  //   console.log(num);
}

const greeting = "Hello world";
for (const greet of greeting) {
  //   console.log(`each Char is ${greet}`);
}

//Maps

const map = new Map();
map.set("IN", "INDIA");
map.set("USA", "United state of america");

for (const [key, value] of map) {
  //   console.log(key, ": ",value);
}

const myobj = {
  game1: "MaxPayne",
  game2: "Minecraft",
};
// for (const [key,value] of map) {
//     console.log(key, ": ",value);
//   }
//This is not iterable

const myObject = {
  game1: "MaxPayne",
  game2: "Minecraft",
  game3: "Valorant",
};
for (const key in myObject) {
  // console.log(myObject[key]);
  // console.log(`${key} Shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"];
for (const key in programming) {
  // console.log(key);
  // key of the array
}
