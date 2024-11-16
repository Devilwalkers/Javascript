let name = "Sagar    paul";
const repoCount = 50;

console.log(name + repoCount);

// String Interpolation
console.log(`My name is ${name},My repo is ${repoCount}`);

// Its a Object and its in a key pair 
const gameName=new String('Sagar paul')
console.log(gameName)
/* Output
0:"S"
1:"a"
2:"g"
3:"a"
4:"r"
5:" "
6:"p"
7:"a"
8:"u"
9:"l"
length:10
*/

// console.log(gameName[0])
// console.log(gameName.__proto__)

// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.toLowerCase())
// console.log(gameName.charAt(4))
// console.log(gameName.indexOf('a'))

// console.log(gameName.substring(0,4))// Saga
// console.log(gameName.slice(-8,4))

const gameNames=new String('     Sagar     paul')

console.log(gameNames)
console.log(gameNames.trim()) //removes extra whitespaces

const url ="This is my lifes?"
console.log(url);
console.log(url.replace('lifes?', 'life.'));



