// => IIFE : Immediately Invoked Function Expression
// => IIFE is a function that is executed right after it is created.
//=> IIFE hm tab use karta ha jab hm kisi cheeze ko start  karta hi execute karwana chata ha to IIFE use karta ha
//=> baz dafa global scope ma kuch variable declare hota ha or jo hmm function lik rha hota ha us ma variable pollute ho jata ha. global scope ka is pollution sa bachana ka lia IIFE use karta ha


// ? named iffe function
(function iffe(){
    console.log("I am IFFE");
})(); // this semicolon is important because in multiple iffe function if we not use semicolon then it will give error // it indicate that the function is end here
//? unnamed iffe function
(() =>{
    console.log("I am IFFE");
})();
((num1) =>{
    console.log(`the sum of two number is ${num1}`);
})("hassan")
