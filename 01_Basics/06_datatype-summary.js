//primitive :: 7 catagories
// 1.string  2.number 3.boolean
// 4.null  5.undefined 6.symbol 7.bigint

// reference type :: Non-premitive

//array, object, functions


const score = 100
const scoreValue = 100.6
const isLoggedIn = false
const outSideTemp = null
let uderEmail = undefined
const id = Symbol('1234')
const anotherId = Symbol('1234')

// console.log(id === anotherId); -> false

const heros = ["shaktiman" , "naagraj", "doga"]

let myObj = {
    name : "hitesh",
    age : 22,
}


const myFunction = function(){
    console.log("hello motherfuckers");
}


// console.log(typeof(myFunction));
//-> function object

//***********STACK AND HEAP*****************

let aVariable = "shadidotcom"
let anotherVariable = aVariable
anotherVariable = "chaiorcode"
// here aVariable is still "shadidotcom"


//lets try with an object

let user1 ={
    email : "abc@gmail.com",
    upi : "gpayxx123",
}

let user2 = user1
user2.email = "def@gmail.com"
console.log(user1.email);
console.log(user2.email);

// user 1 and user2 points to the same data located in heap
//if you change any data of user1/user2 the other one will also get affected 