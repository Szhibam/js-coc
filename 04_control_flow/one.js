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

    falsy           |       truyhy  
    ____________________________________________
    false           |       "0"      
    0               |       'false'
    0n-->bigInt     |       "  "
    -0              |       empty object---> {}
    NaN             |       empty function-->function(){}
    null            |       empty array--> []
    undefined       |
    _____________________________________________

    agar empty object pe constion lagana h 

    array --> length zero h ki nhi
    object--> keys zero honge====================>

    const emptyObject ={}
    
    if(object.keys(emptyObject).length === 0){
        //object.keys----> returns an __ARRAY__
    }


    ____________NULLISH COALESCING OPERATOR__________
    ----------->NULL + UNDEFINED >>>>>>>SAFETY CHECK>>>>>>>>.....

    let val1;
    val1 = 5 ?? 10
    console,log(val1)---->5

    val1 = null ?? 10
    console.log(val1) ---> 10

    val1 = undefined ?? 15 ---->15

    val1 = null ?? 1 ?? 2        --->1
    val2 = null ?? null ?? 100   --->100
    val3 = 1 ?? null ?? 100      ---> 1

    _______ternary op_______
    condition ? true : false




 */



