const name = "harsh"
const repoCount = 50

// console.log(name + repoCount + " Value"); outdated way of using strings

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);// use this way to output always 

const gameName = new String('hitesh-hc-com')// new way to declare Strings 

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length); // returns the length of the string 
// console.log(gameName.toUpperCase());// this func will not change our orignal string 
console.log(gameName.charAt(2));// to retrive character at a paticular index

console.log(name.indexOf('h')); // to retrive the index of a character 
//  if we don't have a character present it will return -1 
// if we have multiple charcters present in the string we will get the pos of first occurence of the char in the string 

const newString = gameName.substring(0, 4)// gives the substring starting 
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));


console.log("   a   ");
console.log("  b c ");
console.log(" d e f");
console.log("g h i j");
console.log("   k    ");


