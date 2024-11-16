/* Singleton user 
const tinderUser= new objects()*/

const tinderUser = {};
tinderUser.id = "001";
tinderUser.name = "sagar";
tinderUser.isLoggedIn = false;

const regUser = {
  email: "sagar@gmail.com",
  fullname: {
    firstName: "Sagar",
    lastName: "paul",
  },
};
//printing fullname from regUser
// console.log(regUser.fullname);

//printing firstname, lastname from fullname
// console.log(regUser.fullname.firstName);

// Optional chaining
// console.log(regUser.fullname?.firstName);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

// const obj3 = { obj1, obj2 };
// const obj3 = Object.assign(obj1, obj2);
// const obj3 = Object.assign({},obj1, obj2);

//spread method
const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

//Creating array & store objects in it
const users = [
  {
    id: "1",
    email: "some1@gmail.com",
  },
  {
    id: "2",
    email: "some2@gmail.com",
  },
  {
    id: "3",
    email: "some3@gmail.com",
  },
  {
    id: "4",
    email: "some4@gmail.com",
  },
];
/*
console.log(users[2].email);
console.log(tinderUser);

//Printing Object keys
console.log(Object.keys(tinderUser));

//Printing Object Values
console.log(Object.values(tinderUser));

//Printing Object Entries
console.log(Object.entries(tinderUser));

//checking if the keys value are empty or not
console.log(tinderUser.hasOwnProperty('isLoggedIn'));*/

const course={
  courseName:"Mern",
  price:"9999",
  courseInstructer:"Albert"
}
// destructure objects
const {courseInstructer}=course;
console.log(courseInstructer);

