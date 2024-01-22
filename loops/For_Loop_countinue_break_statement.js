// ----> for loops

for (let i = 0; i <= 10; i++) {
    const element = i;
    // console.log(element);
}

// using IF ELSE Statement in for loops

for (let j = 0; j < 10 ; j++) {
    const element =j;
    if (j == 3) {
        console.log(`value is detected ${j}`);
    }
    else if(j==8){
        console.log(`value is detected ${j}`);

    }
    console.log(element);
}

// using for loop in the arrays

const arr1= ['egg','meat','bananana']

for (let index = 0; index < arr1.length; index++) {
    const element = arr1[index];
    console.log(element);
}

// nested for loop means for loop inside for loop

for (let i = 1; i <=5; i++) {
    console.log(`Table Of : ${i}`);
    for (let j = 1; j <=10 ; j++) {
        console.log(`${i}*${j} = ${i*j} `);
    }
}

//* Countinue Or Break Statements

//* -----> break statemnet 

for (let a = 0; a < 10; a++) {
    if (a == 5) {
        console.log("computer detected number : 5");
        break
    }
    console.log(`value is : ${a}`);
}

//* continue statement  */

for (let b = 0; b <10; b++) {
    if (b == 7) {
        // console.log(`value 7 is detected`);
        continue
    }
    console.log(`number is : ${b}`);
    
}


//* print star with for loop

for (let i = 0; i <= 0; i++) {
    console.log(`*****`);
    for (let j = 1; j <= 1; j++) {
        console.log("****");
        for (let k = 1; k <= 1; k++) {
            console.log("***");
            for (let l = 1; l <= 1; l++) {
                console.log("**");
                for (let m = 1; m <= 1; m++) {
                    console.log("*");
                }
            }
        }
    }
}

for (let i = 1; i <= 5; i++) {
    if (i == 5) {
        console.log("*****");
    }
    if (i == 4) {
        console.log("****");
    }
    if (i == 3) {
        console.log("***");
    }
    if (i == 2) {
        console.log("**");
    }
    if (i == 1) {
        console.log("*");
    }
}