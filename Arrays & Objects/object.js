//* => object ko declare karna ka 2 tareka ha
//* => 1st tareka ha object literal
//* => 2nd tareka ha object constructor
//* => singleton object => jab hm constructor ka zariya object banata ha to wo singleton object hota ha

//!  object literal

let sym = Symbol("$") // => symbol is used to create unique value

let obj = {
    name: "Hassan",
    age: 20,
    'father name': 'Maqbool',
    [sym]: "$key", // => symbol is used to create unique value
    hobby: "Coding",
    email: "hassan@google.com"
}

// => to access the object element we use dot notation or bracket notation

console.log(obj.name) 
console.log(obj["name"]) 
console.log(obj["father name"]) // => bracket notation is used when the key is in string form
console.log(obj[sym]) // => symbol is used to create unique value

obj["name"] = "Hassan Maqbbool"
console.log(obj["name"])

//* => freeze object

//? Object.freeze(obj) 

//* freeze methord is used to freeze the object we can not change the value of object after freeze

//? => to check the object is freeze or not we use Object.isFrozen(obj) methord 

console.log(Object.isFrozen(obj)) 

//* => function is treated as variable in object

obj.func = function(){
    console.log("hello world")
}
console.log(obj.func())

//* => "this" keyword is used to access/reference the object element in the object

obj.func1 = function(){
    console.log(`hello world : ${this.name}`)  
    console.log(`hello world : ${obj.hobby}`)  
}
console.log(obj.func1())
console.log(obj)



/*=================================part2====================================*/

const symbol1 = Symbol("dollar$")

const object1 = {
   name: "hassan",
   fathername:"maqbool ahmad",
   [symbol1]:"dollar$",
   emial1:"rana@gmail.com",
   department:"bscs"
}

console.log(object1[symbol1]);

//* => to access the value in the nested of objects

const mul_obj ={
    user:{
        username:{
        name: "hassan",
        fathername:"maqbool ahmad"
        }
    }
}

console.log(mul_obj.user.username.name)
console.log(mul_obj.user.username.fathername)

//* => to access the value in the array which contain multiple objects

const array1=[
    {
        userdetails:{
        name: "hassan",
        fathername:"maqbool ahmad"}  
    }
]

console.log(array1[0].userdetails.fathername)
console.log(array1[0].userdetails.name)

//? => Object.assign() methord is used to join the multiple objects together 

const o1={
    name: "hassan",
    fathername:"maqbool ahmad"
}
const o2={
    emial1:"rana@gmail.com",
    department:"bscs"
}
let newvar= Object.assign({} , o1,o2)
console.log(newvar)

//* spread methord to add multiple objects

console.log({...o1,...o2});

//* => in api data can be in array format and multiple object in the array 

const ar = [
    [
    {
        name:"hassan"
    },
    {
        fathername:"maqbool"
    },
    {
        age:12
    },
]
]

console.log(ar[0][1].fathername)

//? => key() , value() methord

const newobject = {
    name: "hassan",
    fathername:"maqbool ahmad",
    emial1:"rana@gmail.com",
    department:"bscs"
 }
 
console.log(Object.keys(newobject)) // to access the keys  
console.log(Object.values(newobject)) // to access the values 
 
//?=> entries() methord

//* it make the key value pair into array

console.log(Object.entries(newobject))

//*=> hasownvalue() methord to now the value is exist or not in the object

console.log(newobject.hasOwnProperty('hassan'))
