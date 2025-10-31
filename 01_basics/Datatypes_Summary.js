//Interview Notes

//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);//false

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// MEMORY ALLOCATION 
// stack (primitive) Heap (non primitive)

let myname ="Harsh"

let anothername = myname ;
anothername="Viraj";

console.log(myname);
console.log(anothername);

let userOne ={
    name:"Harsh",
    email: "harshc2710@gmail.com"
}// this will store by refernece 

let usertwo =userOne;

usertwo.email="xyz@gmail.com";// this will also change the email in user One as they both are pointing to same memory location in heap 


console.log(userOne);
console.log(usertwo);





// ## Primitive Data Types
// Definition: These are the most basic data types that store single, immutable values.

// Copying: They are copied by value, meaning a new, independent copy is created.

// Types:

// String: A sequence of characters (e.g., "hello").

// Number: Numeric values (e.g., 25, 3.14).

// BigInt: Very large integers (e.g., 9007199254740991n).

// Boolean: Logical values (true or false).

// undefined: A variable that has been declared but not assigned a value.

// null: The intentional absence of a value.

// Symbol: A unique and anonymous value.

// ## Non-Primitive Data Types
// Definition: These are complex data types that store collections of values or more complex entities. They are mutable.

// Copying: They are copied by reference, meaning both variables point to the same location in memory.

// Types:

// Object: The main non-primitive type, a collection of key-value pairs (e.g., { name: "John", age: 30 }).

// Array: A special type of object for ordered lists (e.g., [1, 2, 3]).

// Function: A special type of object that can execute code.

// ## Key Differences
// Storage: Primitives are stored directly in the location the variable accesses. Non-primitives are stored as a reference (or pointer) to a location in memory.

// Mutability: Primitives are immutable (their value cannot be changed after creation). Non-primitives are mutable (their internal state can be changed).