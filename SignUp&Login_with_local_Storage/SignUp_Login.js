let username = document.querySelector("#name")
let email = document.querySelector("#email")
let password = document.querySelector("#password")
let confirm_password = document.querySelector("#Repeat_pass")

let submit = document.querySelector("button")
submit.addEventListener('click' , function(e){
    e.preventDefault();
    if (username.value === '' || email.value === '' || password.value === '' || confirm_password.value === '') {
        alert('Please Fill All The Fields')
    }
    else if (password.value !== confirm_password.value) {
        alert('Password Not Match')
    }
    else{
        localStorage.setItem('username' , username.value)
        localStorage.setItem('email' , email.value)
        localStorage.setItem('password' , password.value)
        localStorage.setItem('confirm_password' , confirm_password.value)
        // resetPage()
        window.location.href = 'home_page.html'
    }

})
