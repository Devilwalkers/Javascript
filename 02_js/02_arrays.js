const myMarvel = ["thor", "Ironman", "Hulk"];
const myDc = ["superman", "flash", "Batman"];

myMarvel.push(myDc);
console.log(myMarvel[3]);

// This will not work to directly
myMarvel.concat(myDc);

const allHeroes = myMarvel.concat(myDc);
console.log(allHeroes);

// Spread operator
const all_heroes = [...myMarvel, ...myDc];

console.log(all_heroes);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_array = another_array.flat(Infinity);
console.log(real_array);

console.log(Array.isArray("Sagar"));
console.log(Array.from("Sagar"));

console.log(Array.from({ name: "sagar" }));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
