//!Static 
//* static properties hm tab use karta ha jab hm is kisi cheeza ka access nai dana chata 

//* example of static properties

class username{
    constructor(username){
        this.username = username;
    }
    name(){
        console.log(`the username is ${this.username}`);
    }
    static id(){
        console.log(`the id is random number just for example`);
    }
}

class teacher  extends username{
    constructor(username,email,password){
        super(username)
        this.email = email;
        this.password = password;
    }
    info(){
        console.log(`the username is ${this.username} and email is ${this.email} and password is ${this.password}`);
    }
}

const student = new teacher("hassan","ranahassan$gmail.com","123456789")
student.info();
student.name();
//? student.id();
//! error because id is static properties so we can not access it.

