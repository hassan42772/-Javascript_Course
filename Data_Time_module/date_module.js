// => date_module 
// => date is a object
// => date is a function
const newdate = new Date()
console.log(newdate);
// => data function
console.log(newdate.toString())

// => output :Wed Oct 25 2023 14:42:00 GMT+0500 (Pakistan Standard Time)

console.log(typeof(newdate.toString()))

// => output : string

console.log(typeof(newdate))

// => output : object

console.log(newdate.toDateString())

// => output : Wed Oct 25 2023

console.log(newdate.toLocaleDateString("en-US" , {year: "numeric"  
, month: "long" , day: "numeric" , weekday: "long", hour: "numeric" , minute: "numeric" , second:"numeric" , timeZoneName: "long"}))

// => output : Wednesday, October 25, 2023, 2:42:00 PM Pakistan Standard Time

// => if you add you own data and time

let newdate1 = new Date('2023-11-28')
 // => formates of data and time entering => Date(2023, 10, 28, 14, 42, 0, 0)
 // => formates of data and time entering => Date(2023, 10, 28)
 // => formates of data and time entering => Date(2023, 10)
 // => formates of data and time entering => Date(2023)
console.log(newdate1.toDateString())

console.log(newdate.toLocaleTimeString({hour: "numeric" , minute: "numeric" , second:"numeric"}))

console.log(newdate.toTimeString())

console.log(newdate.toUTCString())

console.log(newdate.toISOString())

console.log(newdate.toLocaleString())

console.log(newdate.getDate())

console.log(newdate.getDay())

console.log(newdate.getFullYear())

console.log(newdate.getHours())

console.log(newdate.getMilliseconds())

console.log(newdate.getMinutes())

console.log(newdate.getMonth())

console.log(newdate.getSeconds())

console.log(newdate.getTime())

console.log(newdate.getTimezoneOffset())

console.log(newdate.getUTCDate())

console.log(newdate.getUTCDay())

// => time stamp

let time_stamp =Date.now()
console.log(time_stamp)
console.log(Date.now()/1000) //=> convert into seconds
console.log(Date.now()/1000/60) //=> convert into minutes
console.log(Date.now()/1000/60/60) //=> convert into hours
console.log(Date.now()/1000/60/60/24) //=> convert into days
console.log(Date.now()/1000/60/60/24/365) //=> convert into years

// => now we will remove the decimal point using round or floor method

console.log(Math.round(Date.now()/1000)) //=> convert into seconds
console.log(Math.round(Date.now()/1000/60)) //=> convert into minutes
console.log(Math.round(Date.now()/1000/60/60)) //=> convert into hours
console.log(Math.round(Date.now()/1000/60/60/24)) //=> convert into days
console.log(Math.round(Date.now()/1000/60/60/24/365)) //=> convert into years



