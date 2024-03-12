//onjects in array = [{},{},...]

/* ________FOR oF______ 
const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"

*/

// const arr = [1,2,3,4,5]
// for (const iterator of arr) {
//     console.log(iterator);
// }

const str = "hello world"
for (const c of str) {
    //console.log(c);   -----> h e l l o  w o r l d
}

//__________MAP____________
//The Map object holds key-value pairs and remembers the original insertion order of the keys.
//Any value (both objects and primitive values) may be used as either a key or a value.

/***
const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

console.log(map1.get('a'));
// Expected output: 1

map1.set('a', 97);

console.log(map1.get('a'));
// Expected output: 97

console.log(map1.size);
// Expected output: 3

map1.delete('b');

console.log(map1.size);
// Expected output: 2
 */

const map = new Map()
map.set('In', "India")
map.set('USA', "United States")
map.set('fr', "France")
map.set('Ch', "Chaina")
map.set('In', "India")

/* 
>> console.log(map);
=> Map(4) {
  'In' => 'India',
  'USA' => 'United States',
  'fr' => 'France',
  'Ch' => 'Chaina'
}
*/

for (const pair of map) {
    //console.log(pair);
    // => [ 'In', 'India' ]
    // => [ 'USA', 'United States' ]
    // => [ 'fr', 'France' ]
    // => [ 'Ch', 'Chaina' ]
}

for (const [key,value] of map) {
//   console.log(`key : ${key}---> value : ${value}`);
   /*   key : In---> value : India
        key : USA---> value : United States
        key : fr---> value : France
        key : Ch---> value : Chaina
    */
}

const myObj = {
    'game1' : 'NFS',
    'game2' : 'GFG'
}

/*
for (const [key,val] of myObj) {
    console.log(key,val);
}
-----> myObj is not iterable ____ERROR_____

++++++ objects are ####NOT#### iterable with ____for of___ iterators
*/ 

//___________________________:::OBJECTS:::_______________________
const obj2 = {
    js : 'javascript',
    cpp : 'c++',
    rb : 'ruby'
}

for (const key in obj2) {
    /*
    >> console.log(key);
    :: js
    :: cpp
    :: rb                  
    
    >> console.log(obj2[key]);
    :: javascript
    :: c++
    :: ruby
    */

    // console.log(`${key} =>${obj2[key]}`);
}


//******** _____FOR-IN____ in array  **********/

let programming = ["c++", "rb","py","js"] 
for (const key in programming) {
/*    >>console.log(key);
      :: 0 1 2 3           

      >>console.log(programming[key]);
      :: c++ rb py js                       */

}


/*******________for-in____ in map ******** */

for (const key in map) {
/*    >> console.log(key);
        ------>> ____NO OUTPUT_____
*/
}

// object ---> for in
// array ----> for of


/**************________FOR EACH ________ */

programming = ["c++", "rb","py","js"] 


//______________call back function__________ => remove the name of the function from the definition
programming.forEach(function (val){
    // console.log(val);
    // c++ rb py js  
})

programming.forEach( (item) =>{
    // console.log(item);
    // c++ rb py js 
} )

function printMe (item){
    console.log(item);
}

// programming.forEach(printMe); // bas ________reference _______ dena h ::: exicute-->X
// // c++ rb py js 

/*
programming.forEach( (item,index,arr) => {
    console.log(item,index,arr);
    ______________output__________________
    c++ 0 [ 'c++', 'rb', 'py', 'js' ]
    rb 1 [ 'c++', 'rb', 'py', 'js' ]
    py 2 [ 'c++', 'rb', 'py', 'js' ]
    js 3 [ 'c++', 'rb', 'py', 'js' ]
    })
*/


const myCoding = [
    {
       labuageName :  "javascript" ,
       languageFileName :   "js"
    },
    {
       labuageName :  "java" ,
       languageFileName :   "java"
    },
    {
       labuageName :  "python" ,
       languageFileName :   "py"
    }
]

myCoding.forEach( (item) =>{
    console.log(item.labuageName);
} )
