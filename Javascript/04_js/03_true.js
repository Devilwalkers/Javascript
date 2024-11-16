const userEmail = "Sagar@gmail.com";

if (userEmail) {
  //   console.log("Got user Email");
} else {
  //   console.log("Dont have user Email");
}

/* falsy values

false, 0, -0, bigInt 0n, "", null, undefiend, NaN */

/* truthy values

"0", 'false'/"false", " ",[], {}, function(){} */

// Check how arrays are empty
if (userEmail.length === 0) {
  //   console.log("Array is Empty");
}

// Check how objects are empty

if (false === 0) {
  //   console.log("true");
} else {
  //   console.log("False");
}

if (false == "") {
  //   console.log("true");
} else {
  //   console.log("False");
}

if (0 == "0") {
  // console.log("true");
} else {
  // console.log("False");
}
const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  //   console.log("Object is empty");
}

// Nullish coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
val1 = undefined ?? 15;

// console.log(val1);

const iceTeaPrice = 200;

iceTeaPrice <= 100
  ? console.log("Less than 100")
  : console.log("more than 100");
