const user = {
  username: "sagar",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username} welcome to website`);
    // console.log(this);
  },
};

// user.welcomeMessage();
// console.log(this);

/*function chai() {
  let username = "sag";
  console.log(this.username);
  doesnt run
}
chai();*/

const chai = () => {
  let username = "Sagar";
  console.log(this.username);
};

// chai();

/* const addTwo = (num1, num2) => {
  return num1 + num2;
};
console.log(addTwo(5, 8)); */

// implicit return
// if implicit return I dont need to write curly-braces and also return, if I write curly-braces then I have to write return keyword  
// const addTwo = (num1, num2) => (num1 + num2);


const addTwo = (num1, num2) => ({username:"Saar"});

console.log(addTwo());
