// IMMEDIATELY INVOKED FUNCTION EXPRESSEION (IIFE)
//JAISE HI AAPNE FUNC LIKHA WO TURANT EXECUTE KRNA H
//TAKI FUNCTION GLOBAL SCOPE SE POLLUTE NAHO

/*
syntax :
 (  function function name () {definition}  ) ();

 _____SEMI COLON IN THE END IS NECESSARY__________ IN CASE OF _____IIFE____

 same as implicit return 
 const func_name = (num1,num2) => (num1+num2)

 (function definition)() -->IIFE
*/


// ____________Named IIFE
(function func_name() {
    console.log(`DB connected`);
})();                           //------>_______SEMICOLON_________


//_____________IIFE WITH PARAMETRS_________
 ((name)=> {
    console.log(`DB CONNECTED ${name}` );    
 })("hitesh");

