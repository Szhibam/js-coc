const user = {
    userName : "szhibam",
    price : 999,

    welcomeMessage : function(){
         console.log(`${this.userName}, welcome to the website`);
         console.log(this);
    }
}

/*
>> user.welcomeMessage()
:: szhibam, welcome to the website

>> user.userName = "sam"
>> user.welcomeMessage()
:: sam, welcome to the website
*/


/*
>> console.log(this);
:: {}

---> we are inside ____node environment_____

----> in ___browser environment____ it will give an output like this 
:: Window {0: global, window: Window, self: Window, document: document, name: '', location: Location, …}

*/

function one(){
    let userName = "meeee"
    console.log(this)

    //console.log(this.userName) ----> ___UNDEFINED___
}

// one()
// :: <ref *1> Object [global] {
//     ...
//     },
//     ...
//     },
//     ...
//   }

const expression = function(){
    let userName = "sxhh"
    // console.log(this.userName); ----> undefined
}



//          _____ARROW FUNCTION_____

const var_name = () => {
    let userName = "sxhh"
    console.log(this.userName); //----> undefined
    console.log(this) //---> {}
}

var_name()

/*
const addTwo = (num1, num2) => {
    return num1+num2
}                                           

const addTwo = (num1, num2) =>  {return num1+num2}

______________implicit return ___________________
const addTwo = (num1, num2) =>  num1+num2
const addTwo = (num1, num2) =>  (num1+num2)
*/

/* agar ___object return _____ karna hota ??
 >> const addTwo = (num1,num2) => {username : "hitesh"}   -->undefined ----> you have to __WRAP__ it inside parentheses */

const addTwo = (num1,num2) => ({username : "hitesh"} )
                                          
console.log(addTwo(3,4));


  
