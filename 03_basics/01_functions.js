// syntax :: function functionname(){}


function sayHello(){
    console.log("h");
    console.log("e");
    console.log("l");
    console.log("l");
    console.log("o");
}

// sayHello --> reference
// sayHello()--> execution


/*
function addTwoNumbers(number1, number2){
    console.log(number1+ number2);
}

***** IN JS ITS NOT NECESSARY TO SPECIFY THE TYPES OF THE PARAMETERS PASSED******** 

addTwoNumbers(3,"4") ::: 34
addTwoNumbers(3,"a") :::3a
addTwoNumbers(2,null)::: 2

const result = addTwoNumbers(3,5) :: 8
console.log(result);  ::: undefined
*/

function addTwoNumbers(number1, number2){
    return number1+ number2
}
const result = addTwoNumbers(3,5)
// console.log(result);    :: 8

/*
function loginUserMessage(username){
    return `${username} just logged in`
}

>> console.log(loginUserMessage("szhibam"))
:: szhibam just logged in

>> console.log(loginUserMessage()) -->PASSED WITHOUT ARGUMENT
:: UNDEFINED JUST LOGGED IN
*/


/*
function loginUserMessage(username ){
    if(!username){
        console.log("please enter a user name")
        return
    }
    return `${username} just logged in`
}
  >>console.log(loginUserMessage())
    ::please enter a user name
    undefined                   */

//**********default argument************* */
function loginUserMessage(username = "defaultName"){
    if(!username){
        console.log("please enter a user name")
        return
    }
    return `${username} just logged in`
}