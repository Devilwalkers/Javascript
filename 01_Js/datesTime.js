//Dates

let dates = new Date();
//console.log(dates.toDateString());
//console.log(dates.toLocaleString());
//console.log(typeof dates);

// Months always starts with 0-11, 0 means january and 11 means december

// let newdates =new Date(2023, 11, 23);

// Months always starts with 1-12, because this is YY-MM-DD
// let newdates =new Date("2023-01-23");

// Months always starts with 1-12, because this is MM-DD-YY
let newdates =new Date("03-23-2023");
// console.log(newdates.toDateString());

let myTimestamp = Date.now();
// console.log(myTimestamp);
// console.log(newdates.getTime());
console.log(Math.floor(Date.now()/1000));


let newDate = new Date();
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

