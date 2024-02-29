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

//Shopping cards : useer keeps on adding products : u dont know how many products are in the cart and you have to 
//add their products together --> WHICH MEANS YOU DONT KNOW THE NUMBER OF PARAMETERS THAT SHOULD BE PASSED

function calculatePrice(...num1){
    return num1;
}
//here "..." is known as ****REST OPERATOR****
// >> console.log(calculatePrice(200, 400,500));
// :: [ 200, 400, 500 ]

function calculatePrice2(val1,val2,...num1){
    return num1;
}

// >> console.log(calculatePrice2(200, 400,500,1000,1200));
// :: [ 500, 1000, 1200 ]


const user = {
    username : "szhibam",
    price : 199
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}
// >> handleObject(user)
// :: username is szhibam and price is 199

/**
 function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and mrp**** is ${anyObject.MMMMMRRRRRPPPP}`);
 }

 TYPECHECKING :: MMMMMRRRRRPPPP IS NOT DEFINED so it might give error 
 */

 handleObject({
    username : "sam",
    price : 799
 })

 const myNewArray = [100,200,300,400]

 function returnSecontArray(arr){
    return arr[1]
 }