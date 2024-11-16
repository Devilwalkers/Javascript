// function addition(num1, num2) {
//   console.log(num1 + num2);
// }

function addition(num1, num2) {
  return num1 + num2;
}

const res = addition(5, 8);
// console.log(res);

function loginUserName(Username) {
  if (!Username) {
    console.log("Please Enter an username");
    return;
  }
  return `${Username} Just Logged in`;
}
// console.log(loginUserName("Sagar"));

//shopping cart

function calculateCartPrice(...num1) {
  return num1;
}
// console.log(calculateCartPrice(200, 400, 500));

const user = {
  name: "Sagar",
  price: 1999,
};
function handleObject(anyObject) {
  console.log(`name is ${anyObject.name} and price is ${anyObject.price}`);
}
// handleObject(user);

const newArray = [200, 400, 600, 800];

function arrayHandles(array1) {
  console.log(`Arrays second element is ${array1[2]}`);
  return array1[2];
}
console.log(arrayHandles(newArray));
