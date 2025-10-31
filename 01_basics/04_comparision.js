// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2<=1);


console.log("2" >1);//true
console.log("02" >1);//true
// the string "2" is converted to a number 2 

console.log(null > 0);//false
console.log(null == 0);//false
console.log(null >= 0);//true

// The Reason is that an equality check  == and comparision > < >= <= works diffrently 
//Comparisions convert null into a number ,treating it as 0 thats why null>=0 is true and null>0 is false 

//undefined gives always false in comparision operator

// ===
console.log("2" === 2); // this is a strict check it also matches the datatype of both the sides