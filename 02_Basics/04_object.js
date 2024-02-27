// const tinderUser = new Object() -> singleton object
// const tinderUser = {} ->non-singleton object
//there is no difference in the working of them

const tinderUser = {}
tinderUser.name = "Soumo"
tinderUser.id = "696969cc"
tinderUser.isLoggedIn = true;


// console.log(tinderUser);
//{ name: 'Soumo', id: '696969cc', isLoggedIn: true }

const regularUser = {
    email : "szoumo@hotmail.com",
    fullname : {
        userFullName :{
            firstName : "szoumo",
            lastName : "saha"
        }
    }
}

//console.log(regularUser.fullname.userFullName);
//op :: { firstName: 'szoumo', lastName: 'saha' }

/******************OPTIONAL CHAINING************* 

>>console.log(regularUser.fullname?.userFullName.firstName);
:: UNDEFINED //see d Qstn(?)MARK^^^
"BASICALLY  agar fullname h to use print karo
warna is case me to ****"UNDEFINED"**** print ho rha h
jab ****API**** se response ata h kayi bar response nhi v ata h
tab hum ye use krte hai" 
***************************************************/


/***********MERGE OBJECTS********************* */
const obj1 = {1:"a", 2 : "b"}
const obj2 = {3 : "c", 4: "d"}

//const obj3 = {obj1, obj2} ---> ye wahi array wala problem dega xdxdxd
const obj3 = Object.assign({}, obj1, obj2) //******neeche dekho */
//>> console.log(obj3);
//:: { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


/*
>>object.assign(target, sourse) ---> returns an object
***YAHA DEEKHO : "{}" lagana compulsory nhi h --> GOOD PRACTICE + GUARENTEE 
LEEEKIIIIIINNNN hum isko v kam use krne wale h
*/

const obj4 = {...obj1, ...obj2}
//>> console.log(obj4);
//:: { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


//*******ALI RE ALI DATA BASE SE VALUES AAYI */
//ACTUALLY ME array of objects aate hai

const users = [
    {
        id : 1,
        email : "abc@gmail.com"
    },
    {
        isLoogedIn : false,
        preference : "cougars"
    }
]
console.log(users[1].preference)

/*
>>console.log(tinderUser);
:: { name: 'Soumo', id: '696969cc', isLoggedIn: true }

>>console.log(Object.keys(tinderUser));
:: [ 'name', 'id', 'isLoggedIn' ]

>>console.log(Object.values(tinderUser));
:: [ 'Soumo', '696969cc', true ]

>>console.log(Object.entries(tinderUser));
:: [ [ 'name', 'Soumo' ], [ 'id', '696969cc' ], [ 'isLoggedIn', true ] ]
ye return krna h ek array jisk upar hum ****loop**** laga skte h
ye bohot ****kaam***** me aata h

*/

//checking is an object has an property

console.log(tinderUser.hasOwnProperty('isLoggedIn'))


//*************DE-STRUCTURE OF AN OBJECT************
const course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructor : "hitesh choudhury"
}
/*
to make your code clean you want to avoid 
the syntax : couse.courseInstructor
*/
//      kiska value chahiye     kaha se chahiye
const {courseInstructor : instructor} = course
console.log(instructor);

/* *************OR**************
const {courseInstructor} = course
console.log(courseInstructor);
************************************/


//**************API*************** */
/*JSON : java-script-object-notation FILE : 
{
    name : 'SZHIBAM',
    coursename : "js-in-hindi",
    price : hindi
}

------or------
[
    {},
    {},
    {}
]

hum usually json ko objectme convert kr lete h
waha se fetch krte jate h 
*/ 
//randomuserme : yaha se api uthaya
//json api->format->beautify