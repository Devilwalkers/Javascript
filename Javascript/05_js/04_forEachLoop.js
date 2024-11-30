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
// console.log(newNums);


const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 }
];

const userBooks = books.filter((bk) => bk.genre === "History");

console.log(userBooks);

