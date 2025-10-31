//singelton 
// it means that it is a single entity
// when we create a object using constructor it is singelton in nature
// we cannot create multiple objects using constructor function
// when we declare object using object literal it is not  singelton in nature
// we can create multiple objects using object literal

// singleton
// Object.create

// object literals

const mySym = Symbol("key1") // creating a symbol


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1", // to use symbol as key we have to use []
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email) // basic way to access the object properties
// console.log(JsUser["email"])
// console.log(JsUser["full name"]) // when we have space in key name we have to use this way to access the property
// console.log(JsUser[mySym]) // to access the symbol key value we have to use this way

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){ // declaring function inside object
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){ // another way to declare function inside object
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());