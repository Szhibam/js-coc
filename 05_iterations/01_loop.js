/*for
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
*/ 

let myArray = ["flash", "batman", "ironman","superMan", "johnnySins", "wonderWoman"]
for (let index = 0; index < myArray.length; index++) {

    const element = myArray[index];
    if(element === "flash") continue;
    if(element === "johnnySins") break;
    console.log(element);
}