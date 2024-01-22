const arr1 = new Array(1,2,3,4,5);
console.log(arr1);

const arr2 = [1,2,3,"hassan is a programmer ",5];
console.log(arr2);
//* => to access the array element , array can be access by index number , and index number start from 0
console.log(arr2[3]);
//* => array methords

//* => lenght methord , to find the lenght of array
console.log(arr2.length);

//* => push methord , to add the element in the end of array
console.log(arr2.push("hassan is a gammer"));

//* => pop methord , to remove the element from the end of array
console.log(arr2.pop());

//* => unshift methord , to add the element in the start of array
console.log(arr2.unshift("do good have good"));

//* => shift methord , to remove the element from the start of array
console.log(arr2.shift());
console.log(arr2);
//* => includes methord , to find the element in the array
const arr3 = [1,2,3,4,5,"hassan", "ali"];

console.log(arr3.includes(2));
console.log(arr3.includes("hassan"));

//* => indexOf methord , to find the index of the element in the array
console.log(arr3.indexOf(2));
console.log(arr3.indexOf("ali"));

//* => join methord , to join the element of array
//* => join methord convert the array into string
console.log(arr3.join(" - "));

//* => at methord , to find the element of array
console.log(arr3.at(2));

//* => concat methord , to join the two array
const arr4 = [6,7,8,9,10];
console.log(arr3.concat(arr4));

//* => slice methord , to slice the array
console.log(arr3.slice(0,3));
console.log(arr3);

//* => splice methord , to remove the element from the array
//* => The splice method is used to change the contents of an array by removing or replacing existing elements and/or adding new elements.

console.log(arr3.splice(0,3));
console.log(arr3);

//* => reverse methord , to reverse the array
console.log(arr3.reverse());

//* => flat methord , to flat the array
let array = [1,2,3,4,5,[6,7],[8,[9,10]]];
console.log(array.flat(Infinity));

//* => concat methord , to join the two array
let array1 = [1,2,3,4,5];
let array2 = [6,7,8,9,10];
console.log(array1.concat(array2));


//* sort methord , to add the item in a order
const fruits = [4,5,1,2,54];
console.log(fruits.sort());
console.log(fruits.reverse());

//* => to join to array we use spread operator
let array3 = [...array1,...array2];
console.log(array3);

let array4 = [...array1,11,12,13,14,15,...array2];
console.log(array4);


//?not good to use 
let array5 = array1
array5.push(array2)
console.log(array5);


//* => isArray methord , to check the array
let array6 = [1,2,3,4,5];
console.log(Array.isArray(array6));


//* => from methord , to convert the string into array
let array7 = 'hassan is a programmer and gammer';
let array8 = 1000;
console.log(Array.from(array7));
console.log(Array.from(array8));

//* => of methord , to convert the string into array

let a = 10;
let d = 50;
let c = 40;
let r = 30;
let array9 = 'hassan is a programmer and gammer';
let array10 = 'hassan is a  cricket player';
let array11 = 'hassan is a football player';
console.log(Array.of(array9, array10, array11));
console.log(Array.of(a,d,c,r));
console.log(Array.of(a,d,c,r,array9,array10));

//* array filter methord 
const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter((word) => word.length > 7);
console.log(result);


