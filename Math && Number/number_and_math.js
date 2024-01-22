const num = 1000;
console.log(num);

const num1 = Number(1000);
console.log(typeof num1)


// => tostring() methord it convert the number into string

console.log(num.toString());
console.log(typeof(num.toString()));
console.log(num1.toString().length);

// => tofixed() methord it convert the number into string and it also take the argument that how many number you want after the decimal point

console.log(num1.toFixed(2))
console.log(num1.toFixed(1))
console.log(num1.toFixed(3))

// => toprecision() methord it convert the number into string and also give the number of digit that you want

const num2 = 1000.123456789;
console.log(num2.toPrecision(4))
const num3 = 134.567;
console.log(num3.toPrecision(3))

/*  => tolocalestring() methord it convert the number into string and its also take the argument that which country you want to convert the number making the number readable easy  */

const num4 = 1344785456;
console.log(num4.toLocaleString("en-pk"))
console.log(num4.toLocaleString("en-us"))
console.log(num4.toLocaleString("en-in"))



/*++++++++++++++++++++++++++++++++++++++MATHS++++++++++++++++++++++++++++++++++++++*/
// math is a object and it has many methord and properties

console.log(Math);

console.log(Math.PI); // => it give the value of pi

console.log(Math.E); // => it give the value of e

console.log(Math.abs(-5)); // => it give the absolute value of number it means it give the positive value of number

console.log(Math.ceil(5.1)); // => it give the round of value of number or upper value of number

console.log(Math.floor(5.9)); // => it give the round of value of number or lower value of number

console.log(Math.round(5.5)); // => it give the round of value of number or upper value of number


console.log(Math.min(1,2,3,4,5,6,7,8,9,10)); // => it give the minimum value of number

console.log(Math.max(1,2,3,4,5,6,7,8,9,10)); // => it give the minimum value of number

console.log(Math.random()); // => it give the random value of number between 0 to 1

console.log(Math.random()*10); // => it give the random value of number between 0 to 10

console.log((Math.random()*10)+1) // => it give the random value of number between 1 to 10 it use when we avoid the 0 value

console.log(Math.floor(Math.random()*10)+1); // => it give the random value of number between 1 to 10 it use when we avoid the 0 value and also give the single value of number 

const max = 10;
const min = 5;
console.log(Math.floor(Math.random()*(max-min+1))+min); // => it give the random value of number between range of  1 to 10 it use when we avoid the 0 value and also give the single value of number and last +min is use when we want to start the number from 1
console.log(Math.pow(2,3)); // => it give the power of number

console.log(Math.sqrt(25)); // => it give the square root of number

