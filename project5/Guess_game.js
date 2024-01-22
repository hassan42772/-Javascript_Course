let random_number = parseInt(Math.random()* 100 + 1);

const user_input = document.querySelector('#guess');
const submit = document.querySelector('#submit');
const previous_guess_number =  document.querySelector('.previous');
const remaining_guess_number = document.querySelector('.remaning');
const low_high_number = document.querySelector('.high_low');
const result_container = document.querySelector('.results');

const p = document.createElement('p');
let previous_guess_list = [];
let chance_counter = 1;
let playgame = true;


    if (playgame) {
        submit.addEventListener('click' , function(e){
            e.preventDefault(); 
            const guess = parseInt(user_input.value);
            visibility_check(guess);
        });
    }

function visibility_check(guess){
    if (isNaN(guess)) {
        alert('Please Enter A Valid Number');
    }
    else if(guess === ''){
        alert('Please Enter  A Number');
    }
    else if(guess < 0){
        alert('Please Enter  A Number Greater Than 0');
    }
    else if(guess > 100){
        alert('Please Enter  A Number Greater Than 0');
    }
    else{
        previous_guess_list.push(guess);
        if (chance_counter === 11) {
            dislay_guess(guess);
            dislay_message(`Game Over : Right Guess is :${random_number}`);
            endgame();
        }
        else{
            check_guess(guess);
            dislay_guess(guess);
        }
    }
}

function check_guess(guess){
    if (guess === random_number) {
        dislay_message('You Guess Right Number');
        endgame()
    }
    else if(guess > random_number){
        dislay_message('You Guess Number Is High');
    }
    else if(guess < random_number){
        dislay_message('You Guess Number Is Low');
    }
}
function dislay_guess(guess){
    user_input.value = '';
    previous_guess_number.innerHTML += `${guess} ,`;
    chance_counter++;
    remaining_guess_number.innerHTML = `${11 - chance_counter}`;
}

function dislay_message(message){
    low_high_number.innerHTML = `${message}`;
}

function endgame(){
    user_input.value = '';
    user_input.setAttribute('disabled' , '');
    p.classList.add('button');
    p.innerHTML = '<h2 id="new_element" style="border-radius: 18px; padding: 5px; border :1px solid white " >Start New Game</h2>';
    result_container.appendChild(p);
    playgame = false;
    startgame();
}
function startgame(){
    const newelement = document.querySelector('#new_element');
    newelement.addEventListener('click' , function(e){
        random_number = parseInt(Math.random()* 100 + 1);
        previous_guess_number.innerHTML = '';
        previous_guess_list = [];
        chance_counter = 1;
        low_high_number.innerHTML = '';
        user_input.removeAttribute('disabled');
        remaining_guess_number.innerHTML = `${11 - chance_counter} `;
        result_container.removeChild(p);
        playgame = true;
    });
}