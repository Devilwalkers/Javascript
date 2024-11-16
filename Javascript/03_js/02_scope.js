let a = 300;

if (true) {
  let a = 20;
  const b = 35;
}

// console.log(a);
// console.log(b);
// console.log(a);

function one() {
  const username = "Sagar";

  function two() {
    const website = "youtube";
    console.log(username);
  }
  // console.log(website);
  two();
}
// one();

if (true) {
  const username = "Sagar";
  if (username === "Sagar") {
    const website = " Google";
    // console.log(username + website);
  }
  // console.log(website);
}
// console.log(username);

function one(num1) {
  return num1 + 1;
}
console.log(one(5));

//Hoisting
addTwo(5);
const addTwo = function (num1) {
  return num1 + 2;
};

