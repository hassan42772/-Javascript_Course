//! ----> WHILE LOOPS <-----

let value = 1

while (value <=10 ) {
    // console.log(`Yes I Print The Value : ${value}`);
    value=value+1
}

// passing array in the while loop

let list_of_games=["gta","igi","need for speed","call of duty"]
let counter = 0
while (counter< list_of_games.length) {
    console.log(`the ${counter} game name is ${list_of_games[counter]}`);
    counter=counter+1
}

//!----> DO WHILE LOOPS 

let counter1 = 1
do {
    console.log(`counter value is ${counter1}`);
    counter1=counter1+1
} while (counter1<=1);