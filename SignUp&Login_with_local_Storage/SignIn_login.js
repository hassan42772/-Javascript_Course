let email = document.querySelector("#email")
let password = document.querySelector("#password")
let submit = document.querySelector("button")
submit.addEventListener('click' , function(e){
    e.preventDefault();
    if ( email.value === '' || password.value === '' ) {
        alert('Please Fill All The Fields')
    }
    else if (localStorage.getItem('email') !== email.value || localStorage.getItem('password') !== password.value) {
        alert('Please Enter Correct Email & Password')
    }
    else{
        window.location.href = 'home_page.html'
    }

})