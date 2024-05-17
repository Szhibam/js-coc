const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descriptor);

// console.log(Math.PI);
// Math.PI = 3;
// console.log(Math.PI);

const chai = {
    name: 'ginger chai',
    price : 250,
    isAvaulable : true,
    orderchai : function(){
        console.log("agar object k andar function h to code iteration me key values k sath sath mai v aa jaunge");
    }
}

// kya iski vv discriptor h ? or agar h to kaise inkoi change karu ?

console.log(Object.getOwnPropertyDescriptor(chai, "name"))

Object.defineProperty(chai, "name", {
    
    writable: false,
    enumerable: false,
    configurable: true,

    
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"))

for (let [key,value]  of Object.entries(chai)) {
    if( typeof(value) !== 'function'){
        console.log(`${key} : ${value}`);
    }
}

/*      price : 250
        isAvaulable : true

    dhyan se dekho key-value me name nhi aaya kyu ki wo humne inumerable false kr diya h */