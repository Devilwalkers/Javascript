// primitive datatypes
// 7 types: string, Number, Boolean, Null, Undefined, symbol, BigInt

const score = 100;
const scoreValue = 100.33;

const isOnline = false;
const temp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

const bigNumber = 3456543576654;
console.log(bigNumber);

// Reference (Non-primitive datatypes)
//Array, objects, functions

const heroes=["Thor","ironMan","captainAmerica"]

let obj={
    name:"sagar",
    age:25,
}
console.log(obj)

const myfun=function(){
    console.log("Sagar paul");
} 

