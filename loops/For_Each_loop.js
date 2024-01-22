/* 
!For Each Loop  
*/

//* ----> using for each loop with array

const arr  = ['hassan','ali','bilal']
//* using simple function
arr.forEach(function(value){
    console.log(value);
});

//* using arrow function

const arr1  = ['hassan','ali_hassan','bilal']
arr1.forEach((value , index , arra ) => {
    console.log(`value is ${value} and the index is ${index} and taken from ${arra}`);
});


/*
* ----> using for each loop with the object 
*/


array2 = [
    {name:"hamza",
    age:23,
    dept:"computer science"},
    {
        name:"ali",
        age:12,
        dept:"software engineering"
    
    },
    {
        name:"hassan",
        age:18,
        dept:"computer science"
    }
]

array2.forEach((key) => {
    if (key.age >=15) {
        console.log(`you are select ${key.name} because you age is ${key.age}`);
    }
});

// another example

array3 = [
    {name:"hamza",
    age:{
        form_age:"23",
        real_age:"22"
    },
    dept:"computer science"},
    {
        name:"ali",
        age:{
            form_age:"34",
            real_age:"43"
        },
        dept:"software engineering"
    
    },
    {
        name:"hassan",
        age:{
            form_age:"43",
            real_age:"54"
        },
        dept:"computer science"
    }
]

array3.forEach((key) => {
   if (key.age.real_age <= 25) {
    console.log(key.name);    
   }
    
});

/* 
?----> For Each loop cannot return the value  
*/
/* 
 * example which show for each loop cannot return the value 
*/

let arr12 = ['hassan','ali','haseeb']
let ar = arr12.forEach((item) => {
    console.log(item);
       return item
});

console.log(ar);


// example
let new_file = [];

let arr13 = [
    {
        name:'hassan',
        city:'bahawalnagar',
        age:21,
        skill:'react'
        
    },
    {
        name:'aliza',
        city:'bahawalnagar',
        age:19,
        skill:'react'
    },
    {
        name:'hamza',
        city:'lahore',
        age:23,
        skill:'python developer'
    },
    {
        name:'arooj',
        city:'bahawalnagar',
        age:16,
    }
]
arr13.forEach( (info) => {
    if (info.age >= 18 && info.city === 'bahawalnagar' && info.skill === 'react') {
        new_file.push(`employee name is: ${info.name} and skill is : ${info.skill}`)
    }

});
console.log(new_file);

/* to solve it we use the filter mehord  */
/* it give the return value and for each loop cannot return the value  */

let array4 = [1.2,23,54,7,89,4 ]

let ar4= array4.filter((item) => {
    
   return item >= 10})
console.log(ar4);