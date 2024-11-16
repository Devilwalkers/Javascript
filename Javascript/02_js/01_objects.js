// singleton

// Object literals
const mySym = Symbol("key1");

const JsUser = {
  nickName: "sagar",
  "Full name": "Sagar paul",
  /*mySym :"myKey1", this is wrong way to declare
   */
  [mySym]: "myKey1",
  age: 25,
  dept: "cse",
  email: "sagar@gmail.com",
};
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["Full name"]);
// console.log(JsUser[mySym]);

// JsUser.email="Sagar@outlook.in";
// Object.freeze(JsUser);
// JsUser.email="Sagar@google.in";
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JavaScript user");
}
JsUser.greeting2 = function(){
    // this called string interpolation

    console.log(`Hello JS user, ${this.nickName}`);
    console.log(`your Dept is, ${this.dept}`);
    
}
console.log(JsUser.greeting());

console.log(JsUser.greeting2());

