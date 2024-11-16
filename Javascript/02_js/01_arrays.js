const myArr = [1, 2, 3, 5, 4, 8, 9];

// console.log(myArr[0]);

const secArr = new Array(1, 2, 3, 5, 6);
// console.log(secArr[2]);

// Array Methods

// myArr.push(5);
// myArr.push(15);
// myArr.pop(15);

// console.log(myArr);

// myArr.shift();
// console.log(myArr);

// console.log(myArr.includes(5)); // return in Boolean
// console.log(myArr.indexOf(5));

const newArr = myArr.join();
// console.log(newArr);
// console.log(myArr);
// console.log(typeof newArr);

// Slice, splice

console.log("A ", myArr);

const myArr1 = myArr.slice(1, 5);

console.log(myArr1);
console.log("B ",myArr);

const myArr2 = myArr.splice(1, 5);
console.log(myArr2);
console.log("C ",myArr);
