class user{
    constructor(username){
        this.username = username;
    }
    user_data(){
        return `The username is ${this.username}`
    }
}

class teacher extends user{
    constructor(username, email){
        super(username)
        this.email = email;
    }
    teacher_data(){
        return `The username is ${this.username} and email is ${this.email}`
    }
}

const student = new teacher("hassan","ran@gmail.com")
console.log(student);
console.log(student.user_data())