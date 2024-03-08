 var c = 100

 if(true){          //blockspace
    let a = 10      //blockspace
    const b = 20    //blockspace
    var c = 30      //blockspace
 }

 /*
 >> console.log(a);
 :: a is not defined
 
 >> console.log(b);
 :: b is not defined

 >> console.log(c);
 :: 30
 */

 //SCOPE ASSESSED THROUGH BROWSER AND THROUGH CODE ENVIROMNEBT(USING NODE.JS) ARE DIFFERENT


// ********* NESTED SCOPE******
//CLOSURE : ati pati bhasai : bahar k function andar k variables ko access kr sakte h
function one( ){
   const username = "szhibam"

   function two(){
      const webSite = "youtube"
      console.log(username);
   }
   /* >> console.log(webSite);
      :: webSite is not defined at one  */

   /*

   >> two()
   :: szhibam

   *********but if we remove this function execution i.e we comment out two() --> //two()
   nothing will be printed when you will call one() in the global scope
   */
}

// one()

if(true){
   const username = "szhibam"
   if(username === "hitesh"){
      const website = " youtube"
      console.log(username + website);
   }
}


// +++++++++++INTERESTING +++++++++++++++++++++

console.log(addOne(5)); //----> works fine

function addOne(num){
   return num+1;
}



//This is also known as ___EXPRESSION___

// >> addTwo(5) ---> ____ERROR___ :: Cannot access 'addTwo' before initialization
const addTwo = function(num){
   return num+2
}

addTwo(5)

//HOISTING -----> BAKI ACHE 
