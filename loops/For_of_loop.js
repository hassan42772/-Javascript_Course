// ----> For OF Loop 

/* Apply For OF Loop On The Array*/

const number=[1,3,5,4,6,7]

for (const num of number) {
    console.log(num);
    
}

// ? Using IF Statement In The For OF Loop */

/*  
*for (const num of number) {
*    if (num >=5 ) {
*        console.log(`Number  ${num} Is Greater Than 5:`);
*        
*    }
*    console.log(num);
*}
 */


//*  Using For OF Loop With String 

let string1 = "Hello World!"

for (const str of string1) {
    if (str ==' ') {
        console.log(`space detected`);
        continue
    }
    console.log(str);
    
}


let string2 = "Hello World!"

for (const str2 of string2) {
    if (str2 ==' ') {
        console.log(`space detected`);
        break
    }
    console.log(str2);

}
// ! MAP 
// *---->  map is a object in the map there is no duplicate value in the map but in object the duplicate value is exist 

const mapping = new Map()

mapping.set("name","hassan")
mapping.set("fathername","maqbool")
mapping.set("age","19")
mapping.set("dept", "cs")

console.log(mapping);

// console.log(map.get("age"));
// console.log(map.get("dept"));

//* Using For OF Loop With Map 

for (const [key,value] of mapping) {
    console.log(`the key is ${key} and the value is ${value}`);
}

//* Using Object In The For OF Loop */
//! object cannot be using in the for of loop because it is not iterable */
const obj = {
    name:"JOHN",
    FatherName:"Alen"
}

for (const [key , value]  of obj) {
    console.log(`${key} and ${value}`);
}