const coding = ["js", "ruby", "python", "java", "cpp", "rust"];

/*
coding.forEach(function (item) {
  console.log(`the value of the coding array is ${item}`);
});
*/

/*
coding.forEach((item) => {
  console.log(item);
});
*/
function print(item) {
  //   console.log(item);
}
coding.forEach(print);

coding.forEach((item, index, arr) => {
  // console.log(item,index,arr);
});

const myCoding = [
  {
    languageName: "C++",
    languageFileName: "Cpp",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
  {
    languageName: "Javascript",
    languageFileName: "js",
  },
];
myCoding.forEach((item, index) => {
  // console.log(index, item.languageName);
});

// Filter

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter((callback function) => condition);

//if I write {} after arrow function then I have to write return before condition
// const newNums = myNums.filter((num) => {
//   return num > 4;
// });
// console.log(newNums);

const newNums = [];

myNums.forEach((num) => {
  if (num > 6) {
    newNums.push(num);
  }
});
console.log(newNums);

