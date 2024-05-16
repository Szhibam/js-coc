/* ek function h uske andar ek or function h then inner function ka "this" kis current context ko show krega 

function SetUserName(username){
    // complex db calls
    this.username = username
}

function createUser(username, email, password){
    SetUserName(username);

    this.email = email;
    this.password = password;
}

const chai = new createUser("chai", "chai@google.com", "123")
console.log(chai);
 o/p :: createUser { email: 'chai@google.com', password: '123' }

 username set hi nhi hua !!!!!!!!!!!!
 kyuki setusername(user) me aape bas uska refrence diya h usko call nhi kiya
 javascript me methods hote h jaha aap explicitely jaake unko call krte h */


 function SetUserName(username){
    // complex db calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    // SetUserName.call(username);
    //  call to ho tha h lekin kaam nhi ho rha
    //  kyuki call stack me kaam krta h function fir usko stack se pop kiya uska execution context ko v hata diya
    // uske andat jitna v variable declare huye the sab ko hata diya gaya


    SetUserName.call(this, username);

    this.email = email;
    this.password = password;
}

const chai = new createUser("chai", "chai@google.com", "123")
console.log(chai);