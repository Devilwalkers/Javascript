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
  console.log(index, item.languageName);
});
