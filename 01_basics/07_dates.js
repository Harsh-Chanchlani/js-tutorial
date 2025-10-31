// Dates

let myDate = new Date()// returns the time in milliseconds from 1 jan 1970
// console.log(myDate.toString()); // gives the current date and time
// console.log(myDate.toDateString()); //  gives only date
// console.log(myDate.toLocaleString());// gives date and time in local format
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

console.log(newDate.toLocaleString('default', { // to get the full month name
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
}));

// console.log(newDate.toLocaleString('default', { // to get the short month name
//     month: "short",
// }));

// console.log(newDate.toLocaleString('default', { // to get the short weekday name
//     weekday: "short",
// }));

// console.log(newDate.toLocaleString('default', { // to get the full weekday name
//     weekday: "long",
// }));

// console.log(newDate.getHours());
// console.log(newDate.getMinutes());
// console.log(newDate.getSeconds());
// console.log(newDate.getMilliseconds());
