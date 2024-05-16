//  function --->object null
//  array --->object null
//  string --->object null

function multiplyByFive(num){
    return num*5;
}

multiplyByFive.power = 2;

console.log(multiplyByFive(4));
console.log(multiplyByFive.power);
console.log(multiplyByFive.prototype);

function createUser(username, score){
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function(){
    this.score++;
}

createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}


/*
const chai = createUser("chsi", 25)
const tea = createUser("tes", 250)


chai.printMe( ) -----> _____error____ cannot read properties of undefined
properties inject hui h
lekin jab aapne ye function se(createUser) chai/tes k andar values tranfer ki 
tab aapne use inform nhi kya ki mere pas ye additional properties aayi h
 ye sara kaam _______new_______ key word krta h         */

const chai =  createUser("chsi", 25)
const tea = new createUser("tes", 250)

chai.printMe( )