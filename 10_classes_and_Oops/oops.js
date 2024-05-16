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

    // return this
}

/*
const userOne = User('szhibam', 12, true)
const uerTwo = User("Chai or code", 12, false)
console.log(userOne);
//  _____________VALUE OVERRIDE__________ : USERTWO GETS PRONTED */

const userOne = new User('szhibam', 12, true)
const uerTwo = new User("Chai or code", 12, false)
console.log(userOne);
