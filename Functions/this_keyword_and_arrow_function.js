/* => this keyword refers to an object.
=>In an object method, this refers to the object.
=> Alone, this refers to the global object.
=> In a function, this refers to the global object.
=> In a function, in strict mode, this is undefined.
=> In an event, this refers to the element that received the event.
=> In a browser window the global object is [object Window]. 
*/

// this referred karta ha current context ko

const person = {
    name: 'hassan',
    age: 21,
    greet: function () {
        console.log(`hello ${this.name}`);
        console.log(this);
    }
}
// person.greet();
// person.name = 'ali';
// person.greet();

// => this keyword in function but in function this keyword refer to global object and in strict mode this keyword refer to undefined
/* function fun() {
    console.log(this);
} */
function fun() {  
    let a = 1;
    console.log(a.this);
    }

fun();

const person1= function(){
    let a = 1;
    console.log(a.this);
}
person1();


// => arrow function
// => arrow function ma this keyword global object ko refer karta ha
const person2 = () =>{
    console.log(this);
}
person2();

// we declear a arrow function in different way

// first way for a single line statement
const arrow = () =>{
    return `in scope { } return is necessary`
}

const person3 = () =>'hassan';
person3();

// second way 
const person4 = (n1,n2) => n1+n2
person4(3,4);

// third way and it is more  important and more use in react js.
const person5 = () => ('hassan is a programmer')
console.log(person5());

// to declear the object then the syntax is

const person6 = () => ({name : "hassan maqbool"})
console.log(person6());