//! JavaScript is a dynamically typed language. This means that the data types of variables are determined at runtime, and you can change the type of a variable as needed. 


/*
! type of variable 
*let , var , const
*const is a constant variable. it can not be changed
*let and var can be changed
*let or const is a block scope variable and var is a global scope variable
*so we cannot use var in our code
*we use let instead of var*/

/* 
  !data types : premetive or non premetive 
  *=> premitive data types are number , string , boolean , null , undefined , symbol(kisi bhi value ko unique banane ke liye symbol ka use hota hai), bigint (big integer)
  *=> non-premitive(reference type) data types are object , array , function 

*/
//* display data in table format
const username = "hassan"
let user_age = 47;
let user_hobby = "coding"
console.table([username,user_age,user_hobby])

//? ----------------------------------------------
let name = "Hassan"
let age = 20
let hobby = "Coding"

/*
* to find the datatype we use typeof() function
*we can also use typeof function without brackets*/

console.log(typeof (name))
console.log(typeof (age))
console.log(typeof (hobby))

// dataconversion
// we can convert  number to string

let a = 10
let b = String(a)
console.log(typeof (a))

// string to number 

let c = "10"
let d = Number(c)
console.log(typeof (d))

// we can also convert string to number by using + sign

let e = "10"
let f = +e
console.log(typeof (f))

// we can also convert number to string by using + sign

let g = 10
let h = "" + g
console.log(typeof (h))

// convert boolean to string => in conversion of boolean to number true = 1 and false = 0

let i = true
let j = Number(i)   
console.log(typeof (j))
console.log(j)

// type of null is object

let k = null
console.log(typeof (k))

//? type of undefined is undefined

let l = undefined
console.log(typeof (l))

//? type of object is object
//? type of array is object
//? type of function is function (function is also a object)
