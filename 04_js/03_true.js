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
const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  //   console.log("Object is empty");
}

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
  console.log("true");
} else {
  console.log("False");
}
