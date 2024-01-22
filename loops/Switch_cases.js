// ===>Switch cases are used to perform different actions based on different conditions.

const age = 18 
const country = "pakistan"


switch (age === 18 && country === "pakistan") {
    case age === 18 && country === "india":
        console.log("you are not eligible to vote")
        break;
    case age >= 18 && country === "pakistan":
        console.log("you are eligible to vote");
        break;
    case age < 18 && country === "pakistan":
        console.log("you are not eligible to vote");
        break;
    default:
        console.log("you are not eligible to vote");
        break;
}