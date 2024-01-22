//! Inheritance
/* 
*inheritance mean kisi bhi object ka ander jo bi property hai wo dusra object use kar sakta hai

?Example1:





*/

const user = {
    name: 'ali',
    age: 20,
    email: 'demi.com'
}
const admin = {
    name: 'ahmed',
    age: 30,
    email: 'ahmed.com',
    role: 'admin',
    __proto__: user //? first way to access data
}
 

console.log(admin.__proto__); 

//? second way to acces data

admin.__proto__ = user
console.log(admin.__proto__);

//? modern syntax to access data
const moderator = {
    name: 'hamza',
    age: 40,
    email: 'hamza.com',
    role: 'moderator',
   
}

Object.setPrototypeOf(admin, user)
Object.setPrototypeOf(moderator, admin)

console.log(admin.__proto__);
console.log(moderator.__proto__);