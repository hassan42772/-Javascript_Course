/* ---> Falsey Values  
==>  0, -0, null, false, NaN, undefined, and "" (empty string) are all falsy.

----> Truthy Values 
==>  "hello", 42, true, 3.14, [ ], { }, ("0","false","undefined","null","nan")(it is also truly) and even new Boolean(false) are all truthy.

----> Example of fasly values */

const falsey_value = -0; // 0, -0, null, false, NaN, undefined, and "" (empty string) are all falsy.
if (falsey_value) {
    console.log('value ');
}
else{
    console.log('not value');
}

//----> Example of truly values
const truly_value = '0'; // "hello", 42, true, 3.14, [ ], { }, ("0","false","undefined","null","nan")(it is also truly) and even new Boolean(false) are all truthy.
if (truly_value) {
    console.log('value');
}else{
    console.log('not value');
}

// ----> Example of truly values to check the array have value or not
const arr =[]

if (arr.length==0) {
    console.log('array is empty');
}else{
    console.log('array have some values');
}

// ----> Example of truly values to check the object have value or not

const chkobject ={};
if (Object.keys(chkobject).length==0) {
    console.log('object is empty');
}else{
    console.log('object have some values');
}
// also find with the values
const chobject ={};
if (Object.values(chobject).length==0) {
    console.log('object is empty');
}else{
    console.log('object have some values');
}