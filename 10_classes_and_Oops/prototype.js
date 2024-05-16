/* what is our goal ? 
humare pass ek string h or usme kuch predefined tasks hum kr sakte h jaise ki length nikalna
mereko ek property chahiye __truelength__ jo mujhe ek string ka true length bateyega
*/

let myName = "shibam     "
// console.log(myName.truelength);

let myHeroes = ["thor", "spidy"]

let heroPower = {
    thor : "hammer",
    spiderman : "sling",

    getSpiderPOwer : function (){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

// agar m yaha par herPower.szhibam() karu to kya hoga ?


Object.prototype.szhibam = function(){
    console.log("szhibam is present in all object");
}

// heroPower.szhibam() ----->>> szhibam is present in all object

// myHeroes.szhibam()


// INHERITANCE

const user = {
    name: "chai",
    email : "chai@google.com"
}

const teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : "js assignment",
    fullTime : true,
    __proto__: TeachingSupport
}

teacher.__proto__ = user

// mordern approach

Object.setPrototypeOf(TeachingSupport, teacher)
// teaching support koi access de diya to access all the prop of the teacher

let anotherUserName = "chaiOrCode     ";

String.prototype.truelength = function(){
    // console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is ${this.trim().length}`);
}

anotherUserName.truelength()
"hitesh    ".truelength()