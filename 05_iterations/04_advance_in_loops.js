const myNums = [1, 2 , 3, 4 , 5, 6, 7, 8, 9]
/*
________________________filter v/s map___________________________

_________________Array Map()______________________
The map() method in JavaScript is used to create a new array by applying a given function 
to each element of the original array.

>> const newNums = myNums.map( (num) => num+10)
>> console.log(newNums);

=>  [1, 2 , 3, 4 , 5, 6, 7, 8, 9]

_________________Array filter()___________________
It is used to create a new array that includes only the elements from an existing array 
that pass a specified condition.

>> const newNewNums = myNums.filter( (num) => {return num+10})
>> console.log(newNewNums);

=> [1, 2 , 3, 4 , 5, 6, 7, 8, 9]

*/

// ________________________chaining___________________

const newNums = myNums
                .map( (num) => num*10)
                .map( (num) =>num + 1)
                .filter( (num) => num >=40)

console.log(newNums);