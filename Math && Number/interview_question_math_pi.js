//!interview question 
//!kya hm math.pi ki value ko change kar sakta ha ya nai 
//? => no, we cannot change the value of math.pi let's see with example
//? sometime in many condition we cannot use loop on the object.some time we reviced the respone from the server, database or api in the form of object behind the respone some properties are disable i.e writable, enumerable, configurable are false that the reason we cannot change the value of math.pi
//* writable: false, enumerable: false, configurable: false because of these properties are false so  we cannot change the value of math.pi

//* to check the properties of math.pi we use :
// ?Object.getOwnPropertyDescriptor() method


console.log(Object.getOwnPropertyDescriptor(Math, "PI"));
//?output : 
/*
*{
*  value: 3.141592653589793,
*  writable: false,
*  enumerable: false,
*  configurable: false
*} 
*/

//? we can own disable the propreties of object by using Object.defineProperty() method
// example

let obj = {
    name: "hassan",
    age: 23,
    department: "bscs",
    lms_id: 1023,
    email: "rana@gmail.com"
}
Object.defineProperty(obj, "name", 
{
    Writable:false,
    enumerable:false,
    configurable:false
});

//? output :
/* 
*name: 'hassan' is disable because of writable:false, enumerable:false, configurable:false

*{
*  age: 23
*  department: bscs     
*  lms_id: 1023
*  email: rana@gmail.com
*}
*/

//? to check it we use try loop on it 

for (let [key,value] of Object.entries(obj)) {
    console.log(`${key}: ${value}`);   
}

//? sometime there is a function declared in the object and it create a problem for us to solve this problem we add a check in the loop i.e


let obj2 = {
    name: "hassan",
    age: 23,
    department: "bscs",
    lms_id: 1023,
    email: "rana@gmail.com",
    details : function(){
        return `my name is ${this.name} and my father name is ${this.fathername} and my department is ${this.department} and my lms id is ${this.lms_id} and my email is ${this.email}`
    }
}
Object.defineProperty(obj2, "name", 
{
    Writable:false,
    enumerable:false,
    configurable:false
});
Object.defineProperty(obj2, "age", 
{
    Writable:false,
    enumerable:false,
    configurable:false
});
Object.defineProperty(obj2, "department", 
{
    Writable:false,
    enumerable:false,
    configurable:false
});

for (let [key,value] of Object.entries(obj2)) {
    if(typeof value !== "function"){
        console.log(`${key}: ${value}`);   
    }
}