/*
== are equal?
!= not equal 
-----------------------------
=== also checks the type -->____STRICT EQUAL___
            2 == "2" --> true
            2 === "2" --> false
        
!== 

____ShortHand Notation____ +++Implicit scope____

const balence = 100
if(balence > 500) log("this is shortHand notation")




switch (key) {
    case value:
        
        break;

    default:
        break;
}
*/

let month = 3

switch (month) {
    case 1:
        console.log("jan");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        break;
    
    default:
        console.log("month not in jan,feb,march");
        break;
}

/*

    falsy                  truyhy  
    _______________________________
    false           |       "0"      
    0               |       'false'
    0n-->bigInt     |       "  "
    -0              |       empty object---> {}
    NaN             |       empty function-->function(){}
    null            |       empty array--> []
    undefined       |
 */

