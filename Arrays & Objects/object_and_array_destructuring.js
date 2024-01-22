//* api data can be in array format and multiple object in the array
//* api sa jo data ata ha ussa hm json kata ha or ussa object ma convert kata ha

//? => Object destructuring

 const object1={
    name:'hassan ',
    fathername:"maqbool ahmad",
    department:'bscs',
    lms_id:'1023',
    email:"ranahassan@gmail.com"
}

console.log(object1['department'])

// ?this is the destructuring of object
// ?we change the name with this syntax (fathername  :father)
const { fathername  :father , department ,name  } = object1
console.log(father)
console.log(name)
console.log(department)

//? => Array destructuring

const array1 = [1,2,3,4,5,6,7,8,9,10]
/*
 console.log(array1[0])
console.log(array1[1])
console.log(array1[2]) 
*/

// ?this is the destructuring of array

const [a,b,c,d,e,f,g,h,i,j] = array1
console.log(b)

