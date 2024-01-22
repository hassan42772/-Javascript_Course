//! => function
// => function is a block of code that is used to perform a single task or multiple task
// => function consist of three parts  1) function keyword 2) function name 3) function body 
//? => agar function ma koi bi value pass na karwa to wo undefined return kara ga
function myfun(num1, num2){
    return `the sum is ${num1 + num2} and th product is ${num1 * num2} and the divide is ${num1 / num2}`;
}

// console.log(myfun(num1, num2));
function myfun(num1,num2){
    if(num1 != num2){
        // console.log('both are equal enter different number')
        return `both are different number`;
    }
    else if (num1+num2 === 6){
        // console.log('the sum is 5')
        return `the sum is 5 `;
    }
    return `the sum is ${num1 + num2} and th product is ${num1 * num2} and the divide is ${num1 / num2}`;
}
// myfun(2, 3);
// console.log(myfun(4, 4));
function newfun(num1, num2){
    return `the sum is ${num1 + num2} and th product is ${num1 * num2} and the divide is ${num1 / num2}`;
}
console.log(newfun(2, "4")); //=> we can pass string in function it is consisder as a number

//! rest operator ya spread operator
// multiple parameter in function 
function multi(...num){
    return num

}

console.log(multi(100,200,300,400,500,600,700,800,900,1000));

//=> passing object in function
// => 1st method
const object1={
    name:'hassan ',
    fathername:"maqbool ahmad",
    department:'bscs',
    lms_id:'1023',
    email:"ranahassan@gmail.com"
}    

 function obj(objectiten){
    return `my name is ${objectiten.name} and my father name is ${objectiten.fathername} and my department is ${objectiten.department} and my lms id is ${objectiten.lms_id} and my email is ${objectiten.email}`
}


//  console.log(obj(object1));

// => 2nd method
 console.log(obj({
    name:'hassan ',
    fathername:"maqbool ahmad",
    department:'bscs',
    lms_id:'1023',
    email:"ranahassan"
 }));

 // passing array in function

 // => 1st method
 const array1 = [1,2,"rana hassan",4,5,6,7,8,9,10]


 function arr(arrayitem){
    return `the array item is ${arrayitem[6]}`

 }

//  console.log(arr(array1));
// => 2nd method

console.log(arr([1,2,"rana hassan",4,5,6,7,8,9,10]));