// Primitive datatype Types

// String, Numbes, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
 
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 123456789098765432n
// console.log(typeof bigNumber);

// Reference or Non-primitive data type

// Array, Object, Functions

// Array Example
const heros =["rajan", "gupta", "kumar"];
// console.log(typeof heros);


// Object Example
let detail = {
    name: "rajan",
    age : 20,
    dob : 1990
}
// console.log(detail);
// console.log(typeof detail);


// Functions Example
const myFunction = function(){
        console.log("Hello World");
}
console.log(typeof myFunction);      // datatype of Function is function object 


