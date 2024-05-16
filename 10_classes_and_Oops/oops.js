//  ___onject literal__ : literally an object

const user = {
    username : "szhibam",
    loginCount : 8,
    signedIn : true,

    getUserDetails : function(){
        // console.log(`username : ${this.username}`);
        // console.log(this);
    }
}




// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

/* ________CONSTRUCTOR FUNCTION_________
const promiseOne = new Promise()
const date = new Date()                 */


function User(username, loginCount, isLOggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLOggedIn = isLOggedIn

    // return this ----> isko karo ya na karo return to implicitely hota hi hai
}

/*
const userOne = User('szhibam', 12, true)
const uerTwo = User("Chai or code", 12, false)
console.log(userOne);
//  _____________VALUE OVERRIDE__________ : USERTWO GETS PRONTED */

const userOne = new User('szhibam', 12, true)
const uerTwo = new User("Chai or code", 12, false)
console.log(userOne);

//  new key word : 
//    jaise hi aap new keyword use kroge sabse pehle ek empty object create hota h jisko hum instance bolte h
//    ek constructor function call hote h 
//    this key word k andar arg wagera inject hota h
//    object return hoga