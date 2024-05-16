// ____promise create____
const promiseOne = new Promise(function(resolve, reject){
    //do an async task 
    //db calls, cryprography realted task, newtwork calls
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    }, 1000)
});

// _____promise consume____

promiseOne.then(function(){
    console.log("promise consumed");
})

//___without storing the var in variable

new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("Async task 2");
        resolve();
    }, 1000);
}).then(function(){
    console.log("async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve({userName : "szhibam", email : 'szhibam@email.com'})
    }, 1000);
})
promiseThree.then(function(user){
    console.log(user);
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = true
        // let error = false;
        if(!error) resolve({userN : "abc", pass : '123'})
        else reject('ERROR : Something went wrong')
    }, 1000);
})


const userN = promiseFour.then((user) =>{
    console.log(user);
    return user.userN
}).then((userN)=>{
    console.log(userN);

}).catch(function(error){
    console.log(error);
}).finally(()=> console.log(
    "the promise is either resolved or rejected")
)

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = true
        // let error = false;
        if(!error) resolve({userN : "js", pass : '123'})
        else reject('ERROR : js went wrong')
    }, 1000);
})

// async function consumePromiseFive(){
//     const response = await promiseFive;
//     console.log(response);
// }

// consumePromiseFive()

// asysn await directly error ko handle nhi krti h 
//  no _____gracefully___handled


async function consumePromiseFive(){
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()
/*
async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        ------->await krwana hoga kyu ki waqt lgta h convert krne me<--------
        console.log(data);
    } catch (error) {
        console.log("E : ", error);
    }
}

getAllUsers()
*/


fetch('https://api.github.com/users/szhibam')
.then( (response) => {
    return response.json();
})
.then( (data) => {
    console.log(data);
})
.catch( (error) =>{
    console.log(error);
})

