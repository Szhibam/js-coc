let score = null
// console.log(typeof(score));
let valueInNumber = Number(score)
// console.log(typeof(valueInNumber))

// console.log(valueInNumber);

/*
conversion
_________________
"33" -> 33
"33abc" -> NaN
true -> 1   false -> 0
null -> 0
*/

let isLoggedIn = 1;
let boolIsLoggedIn = Boolean(isLoggedIn);
// console.log(boolIsLoggedIn);

// 1 -> true 0->false
// "" => false
//"sfdf" => true


let somNum = 33
let stringNumber = String(somNum)
// console.table([stringNumber, typeof(stringNumber)]);
/*

┌─────────┬──────────┐
│ (index) │ Values   │
├─────────┼──────────┤
│ 0       │ '33'     │
│ 1       │ 'string' │
└─────────┴──────────┘

*/

//**************** Operations*************** */

let value = 3;
let negValue = -value
// console.log(negValue);

let num1, num2, num3;
num1 = num2 = num3 = 2+2


let gameCounter = 100
gameCounter++;
console.log(gameCounter++);
console.log(++gameCounter);