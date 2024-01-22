/*
! For In Loop 
*/
//* using FOR IN LOOP with object 

const object1={
    name:"hassan",
    fathername:"maqbool"
}

for (const key in object1) {
    console.log(`key is ${key} and value is  ${object1[key]}`);
}

/*
* using for in loop with array */
const arr = ['hassan','ali','hamza']

for (const key in arr) {
    console.log(arr[key]);
}

// another example --
let dept = [{name:'hassan',rollno:12,age:23},{name:'ali',rollno:14,age:24},{name:'hussain',rollno:11,age:22},{name:'hamza',rollno:13,age:20}]

for (const value in dept) {
    if (dept[value].name.length >= 6 && dept[value].age >= 20) {
        console.log(dept[value].rollno);
        
    }
    
}

//* using for in loop with the map
//! map is not iteratable in for in loop 

const mapping = new Map()
mapping.set("name","hassan")
mapping.set("fathername","maqbool")
mapping.set("age","19")
mapping.set("dept", "cs")

for (const [key,value] in mapping) {
    console.log(`${key} and ${value}`);
}
//! iterator the map with for in loop
const map = new Map();
map.set("name", "hassan");
map.set("age", 20);
map.set("email", "ranahassan@gmail.com");

const keysArray = Array.from(map);
for (const key in keysArray) {
    const obj = keysArray[key]
    console.log(obj);
    for (const key in obj) {
        console.log(obj[key]);
    }
}

/* using for in loop with string*/
const string1= "ali is a programmer"

for (const key in string1) {
    if (string1[key]==" ") {
        console.log(string1[key].replace("","_"));
    }
    console.log(string1[key]);
}

