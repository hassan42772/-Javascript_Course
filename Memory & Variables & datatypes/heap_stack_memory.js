/*
* => variable ko store karna ka 2 tareka ha heap memory and stack memory 
*   => (Dynamic) means capable of action and/or change, while (static) means stationary or fixed
*  => premitive datatype use karta ha stack memory ko 
*  => stack ma hamma copy milti ha original value nahi milti
*  => stack ma agar change karta ha to original value change nahi hoti
*   => non-premitive datatype use karta ha heap memory ko
*  => heap ma hama original value milti ha reference ka tor pa 
*   => heap ma agar change karta ha to original value change ho jati ha
*/

// example of premitive type(stack memory )
let a = 10   // stack memory ma 10 store hoga        
let b = a    // stack memory ma 10 store hoga
b = 20   // stack memory ma 20 store hoga
console.log(a)
console.log(b)

// example of non-premitive type (heap memory)
let c = {
    name: "Hassan",
    age: 20 
}   // heap memory ma reference store hoga
let d = c   // heap memory ma reference store hoga
d.age = 21  // heap memory ma reference store hoga
console.log(c)
console.log(d)

// another example of heap memory 
let number = [1 ,3, 4 ,5 ,6,7]
console.log(number); 
let another  = number
another.push(100)
console.log(another); 
console.log(number); 

