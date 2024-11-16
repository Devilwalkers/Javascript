//Immediately Invoked Function Expressions (IIFE)

(function sagar() {
  console.log(`DB CONNECTED`);
})();
//We have to end the context with ';'

(function sagar() {
  console.log(`DB CONNECTED New1`);
})();

// named IIFE
((name) => {
  console.log(`DB CONNECTED ${name}`);
})("Sagar");
