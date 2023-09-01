// Function that receives a callback and calls it
function callback () {console.log('I am the callback function');}
function receivesAFunction(callback) {
      callback();
      console.log('I am the receivesAFunction function');
  }
  

// Function that returns a named function
function returnsANamedFunction() {
    function namedFunction() {
      console.log("This is a named function.");
    }
    return namedFunction;
  }
  


  // Function that returns an anonymous function
  function returnsAnAnonymousFunction() {
    
    return function () {
        console.log("This is an anonymous function.");
      };
  }
  
  


  module.exports = {
    timeout: 5000, 
  }; 
  