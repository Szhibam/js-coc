const myArr = [0, 1, 2, 3, 4, 5]
const arr2 = new Array("shaktiman", "nagraj")
// console.log(arr2[0]) : shaktiman

//*********methods********** */
//arr.push(element) : pushes elements
myArr.push(6)
myArr.push(7)
myArr.pop()

myArr.unshift(111)
myArr.shift()

// console.log(myArr.includes(0)) true
// console.log(myArr.indexOf(111)); -1
const newArr = myArr.join()
// console.log(myArr); [0, 1, 2, 3,4, 5, 6 ]
// console.log(newArr); 0,1,2,3,4,5,6


//******SLICE-SPLICE********** */

console.log("A", myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("b", myArr);

const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log("c", myArr);