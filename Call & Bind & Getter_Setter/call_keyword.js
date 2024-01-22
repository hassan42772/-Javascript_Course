//! call keyword
/*   
*call keyword is used to call a function
*call keyword ab tab use karta ha jab hum kisi or function ka context *current kisi or  function ma use karna chata ha to us to call karna ka *use hota ha 
*/
// ?Example


function user_name(name) {
    this.name = name
}

function user_detail(name,age,phone,address) {
    user_name.call(this,name)
    //? call keyword ka use kar ka hum na user_name function ka context user_detail function ma use kara ha --- is function ka this user_name function ka this ko point kar raha ha ka ap muja use karo jis ki waja sa hama user_name function ka context mil rha ha
    this.age = age
    this.phone = phone
    this.address = address
}

let data = new user_detail("hassan",20,123456789,"karachi")
console.log(data);