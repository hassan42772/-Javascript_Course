// => scope 
// var hamra global scope ki tara kam karta ha jo hmm use nai karta ha
// let and const hamra block scope ki tara kam karta ha jo hmm use karta ha

// var c = 1;

//gloabal scope hm isko kahi bhi use kar sakta ha
// block scope  hm isko sirf us block ma use kar sakta ha jis ma hmna isko declare kia ha

let a = 2;
const b = 45;
if (true) {
    let a = 1;
    const b = 2;
    var c = 3;
}

console.log(a);
console.log(b);
console.log(c);


if (true) {                   // => block scope / parent scope => parent can not access child scope
    const name = 'hassan';
    if (name === 'hassan') {  // => nested scope / child scope => child access parent scope 
        const father = 'maqbool';
        console.log(name + ' ' + father);
    }
    // console.log(father);
}
// console.log(name);


function fun1(){
    const name = 'hassan';
    function fun2(){
        const father = 'maqbool';
        console.log(name + ' ' + father);
    }
    fun2();
    // console.log(father);
}
fun1();

// syntax of function

console.log(first());   //in this case we can call the function before the function declaration
function first(){
    return `this is first function`
}

// console.log(second());   //in this case we can not call the function before the function declaration
const second = function(){
    return `this is second function`
}   
console.log(second());