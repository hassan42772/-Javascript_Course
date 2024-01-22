//! Classes

class user{
    constructor(username,email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
    info(){
        console.log(`the username is ${this.username} and email is ${this.email} and password is ${this.password}`);
    }
    updata(){
        console.log(`the username is ${this.username.toUpperCase()}`);
    }

}
const data = new user("hassan","ranahassan@gmail.com","123456789")
data.updata()
data.info()

//? behind the scence

function student(username,email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}
student.prototype.info = function(){
    console.log(`the username is ${this.username} and email is ${this.email} and password is ${this.password}`);
}
student.prototype.updata = function(){
    console.log(`the username is ${this.username.toLowerCase()}`);
}
const student1 = new student("hassan","ranahassan@gmail.com","034934732732")
student1.info()
student1.updata()