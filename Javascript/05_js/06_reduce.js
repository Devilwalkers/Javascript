const myNums = [1, 2, 3];

//Using function
// const myTotal = myNums.reduce(function (accumulator, currentValue) {
//   console.log(`Accumulator value: ${accumulator} and current value: ${currentValue}`);
//   return accumulator + currentValue;
// }, 0);

//using Arrow function

// const myTotal = myNums.reduce((accumulator, currentValue) => {
//   console.log(
//     `Accumulator value: ${accumulator} and current value: ${currentValue}`
//   );
//   return accumulator + currentValue;
// }, 0);

// console.log(myTotal);

const shoppingCart = [
  {
    itemName: "Mobile",
    price: 19999,
  },
  {
    itemName: "laptop",
    price: 79000,
  },
  {
    itemName: "tablet",
    price: 69999,
  },
];

const priceToPay = shoppingCart.reduce(
  (accumulator, item) => accumulator + item.price,
  0
);

console.log(priceToPay);
