// array
// we can store diffrent datatypes in array
// arrays are also reference datatypes i.e when copy operation is performed it creates Shallow copy
const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)// adds element at the start of the array and is computationally expensive
// myArr.shift() // removes element from start of the array and is computationally expensive

// console.log(myArr.length);
// console.log(myArr.at(-1)); // to get the last element of the array

// console.log(myArr.includes(9));// returns true or false if the element is present in the array or not
// console.log(myArr.indexOf(3));// returns the index of the element if present else -1

// const newArr = myArr.join()// converts array to string
const newArr = myArr.concat([6, 7, 8])// adds two arrays and returns a new array

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)// it will not modify the original array

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)// it will modify the original array and return the removed elements
console.log("C ", myArr);
console.log(myn2);