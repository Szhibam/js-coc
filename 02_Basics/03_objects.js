/* singleton : koi v constructor se aap jab banate ho 
tab ye singleton ibject create hota h 
yani ki ye apne tarah ki ek hi object hai iska single instance create hota h*/

//jab hum literal ki tarah ibject banate h tab ek instance k jagah multiple instances banta h 

//LITERALS

//object.create //constructor k through

const mySymbol = Symbol("keys")

const jsUserr = { // yaha key and values ki tarah store hota h
    "full name" : "Szhibam Banerjee",
    //^^^you cant access this through through dot
    [mySymbol] : "myValue1", // to use it as a SYMBOL not as a string
    name : "szhibam", //by default keys string ki tarah store hote h
    age : 22,
    loacation : "Kolkata",
    email : "szhibam@rediffmail.com",
    isLoggedIn : false
}

console.log(jsUserr.isLoggedIn);
console.log(jsUserr["email"]);
console.log(jsUserr["full name"]);
console.log(jsUserr[mySymbol]);
//this^^ will run properly 
//but we r not using mysymbol as a symbol
//when you will check the data type of it 

/* const jsUserr = { 
    mySymbol : "myValue1", 
}
console.log(typeof jsUserr.mySymbol);  if you are using the commented code just above this line
^^ it will give you  STRING
*/
console.log(typeof jsUserr[mySymbol]);


//change the values of an object
jsUserr.email = "szhibam@gpt.com"
//to lock the values
// Object.freeze(jsUserr)
jsUserr.email = "szhibam@micosoft.com"
//this value will not propagate though it wont give you an error
//console.log(jsUserr);

jsUserr.greeting = function(){
    console.log("hello js user")
}
jsUserr.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`)
}

console.log(jsUserr.greeting());
console.log(jsUserr.greetingTwo());