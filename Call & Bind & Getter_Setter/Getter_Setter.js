//! Getter  Setter
/*
?getter setter hm tab use karta ha jab hm kisi cheeze ka access nai dana chata ya access dana bi chata ho to encrption kar ka matlab us ko change kar ka dana chata ho.
*/


//! Getter Setter with Class

class user{
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    get password(){
        return this._password = "**********";
    }
    set password(newpassword){
        this._password = newpassword;
    }

    get email(){
        return this._email = "rana****@****.com";
    }
    set email(newemail){
        this._email = newemail;
    }
}
const data = new user("hassan","ranahassan@gmail.com","123456");
console.log(data.password);
console.log(data.email);

//! Getter Setter with  DefineProperty 

function user_data(useremail,userpassword){
    this.useremail = useremail;
    this.userpassword = userpassword;
    Object.defineProperty(this, "useremail" , {
    get: function useremail(){
        return this._useremail = "rana****@---.com";
    },
    set: function useremail(newuseremail){
        this._useremail = newuseremail;
    }
   })
}
//? factory function 
const stu = new user_data("rana@gmail.com","123456");
console.log(stu.useremail);

//! Getter Setter with Object

const student_data = {
    username : "rana hassan",
    useremail : "rana@hassangmail.com",
    passowrd : 123456,

    get passowrd(){
        return this._passowrd = "**********";
    },

    set passowrd(newpassowrd){
        this._passowrd = newpassowrd;
    },
    get useremail(){
        return this._useremail = "****mail****";
    },

    set passowrd(newpassowrd){
        this._useremail = newpassowrd;
    }
}

const student  = Object.create(student_data);
console.log(student.passowrd);
console.log(student.useremail);