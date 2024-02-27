let myDate = new Date()
// console.log("myDate:",myDate);
// console.log("toString :",myDate.toString());
// console.log("toDate string :",myDate.toDateString())
// console.log("toISOString :",myDate.toISOString())
// console.log("toLocaleString :",myDate.toLocaleString())
// console.log("toJSON :",myDate.toJSON())
// console.log("toLocaleTimeString :",myDate.toLocaleTimeString())
// console.log("toUTCString :",myDate.toUTCString())
// console.log("toLocaleDateString :",myDate.toLocaleDateString())

// let myCreatedDate = new Date(2023, 0, 23, 5, 9)
// let myCreatedDate = new Date("2024-02-09")
let myCreatedDate = new Date("02-09-2024")
//console.log(myCreatedDate.toString())


let myTimeStamp = Date.now();
// console.log(myTimeStamp); 1708800417039
// console.log(myCreatedDate.getTime()) 1707417000000

let newDate = new Date()
console.log(newDate.getDay()+1);
console.log(newDate.getMonth()+1);

newDate.toLocaleDateString("default", {
    weekday: "long",
    era : "narrow",
    dayPeriod : "short"

})






