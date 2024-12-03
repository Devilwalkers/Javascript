// for

for (let i = 1; i <= 10; i++) {
  // console.log(i);
}

for (let i = 1; i > -10; i--) {
  // console.log(i);
}
const myArray = [1, 2, 4, 5, 6, 8, 3];

for (let i = 0; i < myArray.length; i++) {
  // console.log(myArray[i]);
  if (myArray[i] == 4) {
    // console.log(`This is this is exist in array ${i}`);
  }
}

for (let i = 0; i < 3; i++) {
  // console.log(`inner loop ${i}`);
  for (let j = 0; j < 3; j++) {
    // console.log(`outer loop ${j}`);
  }
}

//Table printing using Loop

for (let i = 1; i < 3; i++) {
  // console.log(`${i}'s Table`);

  for (let j = 1; j <= 10; j++) {
    // console.log(i, "", "*", "", j, "=", i * j);
  }
}

//Break and Continue

for (let i = 1; i <= 10; i++) {
  if (i == 7) {
    // console.log("the trigger value is ",i);
    break;
  }
  // console.log(`Value is ${i}`);
}

for (let i = 1; i <= 10; i++) {
  if (i == 7) {
    console.log("You can continue after this value ", i);
    continue;
  }
  console.log(`Value is ${i}`);
}
