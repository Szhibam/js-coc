const marvel_heroes = ["thor", "IronMan", "Spiderman"]
const dc = ["superman", "Batman", "flash"]

// marvel_heroes.push(dc)
// console.log(marvel_heroes)

let newHero = marvel_heroes.concat(dc)
// console.log(newHero)

const all_heroes = [...marvel_heroes, ...dc]
// console.log(all_heroes)
// [ 'thor', 'IronMan', 'Spiderman', 'superman', 'Batman', 'flash' ]

const anotherAray = [1, 2, 3, [4, 5, 6], 7, [6, 7,[4, 5]]]
const converted_flat_array = anotherAray.flat(Infinity)
// console.log(converted_flat_array);1, 2, 3, 4, 5,6, 7, 6, 7, 4,5

//data scrapping : when you scrap the data the format in which 
// the data comes can be anything 

console.log(Array.isArray("hitesh"));
console.log(Array.from("hitesh"));



