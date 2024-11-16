const score = 5000;
console.log(score);

const balance = new Number(200);
console.log(balance);

console.log(balance.toString());
console.log(balance.toFixed(1));

const oNumber = 23.454575;
console.log(oNumber.toFixed(3));
console.log(oNumber.toPrecision(2));

const hundred = 1000000;
//Indian currency types
console.log(hundred.toLocaleString("en-IN"));
console.log("\n");

/*++++++++|Maths Library|++++++++*/
console.log("++++++++|Maths Library|++++++++");
console.log(Math);
console.log(Math.abs(-55));
console.log(Math.round(4.3));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.3));
console.log(Math.min(4, 5, 9, 7));
console.log(Math.max(4, 5, 9, 7));

console.log("\n");
console.log("++++++++|Random|++++++++");

console.log(Math.random());
console.log((Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);

const min=10;
const max=20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
