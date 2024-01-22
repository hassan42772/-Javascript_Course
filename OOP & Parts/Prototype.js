/* 
!Prototypes 
*prototype behaviour ha javascript ka 
*prototype hi ha jo hama new keyword , this keyword, classes , inheritance, etc provide karta hai


*javascript ma har cheeze object hai 

!Diagram
?function ----->     ( Q: function bi object ha ka nai?)(Ans: Example1)
?              |
?Array ---------> object -----> null
?              |
?string ------->

* AT the end of the day, everything is an object in javascript
!Example1:
*    function a() {
*        return 5
*    }
*    a.hello = 'hello'
*    console.log(a.hello);

*function function bi ha or object bi ha

*/

function items(username, price){
    this.username = username
    this.price = price
}
items.prototype.adder = function(){
    this.price++
}
items.prototype.nameShower = function(){
    console.log(`your price is ${this.price}`);
}
items.prototype.usernameShower = function(){
    console.log(`your username is ${this.username}`);
}

//! new keyword 

//? hmm na function sa value variable ma transfer kiya per hm na bataya nai ka hamara pas additional properties bi hai ya batana ka kam new keyword karta ha 

const item1 = new items('ali', 10)
const item2 = new items('ahmed', 20)
item2.nameShower()
item2.usernameShower()


/* 
!behind the scene of  new keyword
* 1. new keyword create a empty object
* 2. new keyword lata ha reference of constructor function
* 3. object create hota ha to wo link ho ga  hi ho ga prototype sa
* 4. constructor function call hota ha or this keyword ki wja sa instance ka ander property save ho jata hai
* 5. new keyword return karta hai instance
*/
//! add property in base of object 

let MarvalHero = ['Ironman', 'Thor', 'Hulk', 'Captain America']
let hero ="Spiderman"
let marvalhero = {
    "Ironman": "metal suit",
    "Thor": "hammer",
    "Hulk": "green",
    "Captain America": "shield",
    Thorpower : function(){
        console.log(`Thor power is ${this.Thor}`);
    }
}

//* we can add property directly in the  object that can be access by all aray, string, object 

Object.prototype.NewHero = function(){
    console.log(`New hero is Spiderman`);
}
marvalhero.NewHero()
MarvalHero.NewHero()
hero.NewHero()