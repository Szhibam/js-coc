const programming = ["c++", "rb","py","js"] 
//____________return in forEach______________
const value = programming.forEach( (item) => {
    // console.log(item);
    //return item;  --->ye likho or na likho ye kuch return nhi karta
})

// console.log(value);   --->undefined

const myNums = [1,2,3,4,5,6,7,8,9]
const newNums = myNums.filter( (num) => num > 5)
// console.log(newNums);   ==>  [ 6, 7, 8, 9 ]

//__________curly braces  =====> use return keyword_______
const newNewNums = myNums.filter( (num) =>{
    return num>4
})

//** if you want to use _______forEach______ only */
//create an empty arr

const myArray = []

myNums.forEach( (num) => {
    if(num > 4){
        myArray.push(num)
    }
})

// console.log(myArray);
// [ 5, 6, 7, 8, 9 ]


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  //_______________implicit return_______________________
  const userBooks = books.filter( (bk) => bk.genre === 'History')
  //   console.log(userBooks);

  //_______in the code bellow we used {} so we need to us the ___return___ keyword_____
  const userBooksTwo = books.filter( (bk) => {
     return bk.publish >= 1995 && bk.genre ==='History'})
  console.log(userBooksTwo);
