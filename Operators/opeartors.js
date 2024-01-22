// ************************************************operators***************************************************

console.log(2+2);  // plus operator
console.log(2-2);  // minus operator
console.log(2*2);  // multiplication operator
console.log(2/2);  // division operator
console.log(2%2);  // modulus operator
console.log(2**2);  // exponentiation operator
console.log(2+2*2);   // precedence
console.log((2+2)*2); // precedence

// increment operator
let a = 2;
a++;
console.log(a);

// decrement operator
let b = 2;  
b--;
console.log(b);

// prefix and postfix
/* The postfix increment operator increments the value and returns the value before the increment.

The prefix increment operator increments the value and returns the value after the increment.
*/
let x = 3;
const y = x++;
console.log(`x:${x}, y:${y}`);

let c = 3;
const d = ++c;
console.log(`c:${c}, d:${d}`);

// comparison operators
console.log(2>1);  // greater than
console.log(2<1);  // less than
console.log(2>=1);  // greater than or equal to
console.log(2<=1);  // less than or equal to
console.log(2==1);  // equal to == checks the datatype also loosely
console.log(2!=1);  // not equal to
console.log(2===1);  // equal to === checks the datatype also strictly 
console.log(2!==1);  // not equal to
console.log(null > 0);  // false
console.log(null == 0);  // false
console.log(null >= 0);  // true (null is converted to 0) in the comparison process

// logical operators
console.log(true && false);  // and operator
console.log(true || false);  // or operator
console.log(!true);  // not operator

// ternary operator
let age = 18;
let accessAllowed = (age > 18) ? true : false;
console.log(accessAllowed);

// assignment operators
let num = 10;
let num2 = 10;

if (num < num2) {
    console.log("num is not equal to num2");
}
else if (num && num2 == 10) {
    console.log("nm is equal to num2");
}
else if (num || num2 ==100) {
    console.log("number is greater than 100");
}
else {
    console.log("pass");
}


