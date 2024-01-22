// ! Lexical Scope and Closure
// ? in lexical scope the inner function has access to the variables and other resources of its parent scope. 
// ? This means that the child function has access to the variables in the parent function.
//* Example :

function outer(){
    let username = "rana hassan"
    function inner(){
        console.log(username);
    }
    inner()
}
outer()

//! Closure
// ? Closure is a function that has access to the parent scope, even after the parent function has executed.
//? parent function executed hona ka bad waha a gata ha memory ka role or memory ma parent function ka data store hota ha or child function us data ko access kar sakta ha.
 //* Example :

function outer(){
    let name = 'Rana Hassan'
    function inner(){
        console.log(name);
    }
    return inner;
}

const newfun = outer()
newfun()

//? ab outer function to execute ho chuki ha or uska data bhi store ho chuka ha memory ma or ab us ka lexical scope ka access ha child function ka pass.