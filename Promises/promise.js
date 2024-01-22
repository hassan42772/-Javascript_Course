/* 
!--> Promises 
* Promises are a way to handle asynchronous operations in JavaScript.
* asynchronous operations are operations that take an unknown amount of time to complete.
*-->Async tasks are :
? DataBase calls
? API calls
? Network calls
? cryptographic 
*-->promise is a object
*-->promise have 3 state
? pending
? fulfilled
? rejected
*-->promises ka 2 part ha 1 promise ko construct karna or 2 us promise ko consume karna.
*/


// *create promise

const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve("Promise is resolved")
    }, 1000)
})
promiseOne.then((data)=> console.log(data))

// *second methord to create a promise

new Promise((resolve,reject)=>{
    resolve("second methord is resolved properly")
}).then((data)=>{
    console.log(data)})



// *promise with reject
const promisetwo = new Promise(function(resolve, reject){
    let error = true;
    if (!error) {
        resolve("promise is resolved")
    }else{
        reject("Error : promise is rejected")
    }
})

promisetwo.then((data)=> console.log(data))
.catch((error)=> console.log(error))

// *access data 

const promiseThree = new Promise((resolve,reject)=>{
    let error = true
    if (error) {
        resolve({username:"hassan" , password : 12345})        
    }
    else{
        reject("Error : promise is not resolved")
    }
})

promiseThree
.then((response)=>{
    return response
})
.then((data)=>{
console.log(data.username);
console.log(data.password);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log("promise is either resolve or reject");
})

// *Ascyn await methord


const promiseFour = new Promise((resolve,reject)=>{
    let error = true
    if (error) {
        resolve({username:"hassan" , password : 12345})        
    }
    else{
        reject("Error : promise is not resolved")
    }
})
async function data(){
   try {
    const response = await promiseFour
    console.log(response);
   } catch (error) {
     console.log(error);
   }
}
data()

// *api data through async await

async function getData(){
    try {
        const responce =await fetch("https://api.github.com/users/hassan42772")
        const data = await responce.json()
        console.log(data.id);

    } catch (error) {
        console.log("error 404!");
    }
}
getData()

// *api data through fetch methord 
fetch("https://api.github.com/users/hassan42772").then((data)=>{
    console.log(data.json());
})
.then((newdata)=>{
    console.log(newdata.id);
})
.catch((error)=>{
    console.log(error);
})