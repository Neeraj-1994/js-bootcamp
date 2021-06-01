
/* Logical Statement Practice

// Ternary Operator Practice

let num = 2;

// if(num === 7) {
//     console.log('lucky!');
// } else {
//     console.log('BAD!');
// }

// num === 7 ? console.log('lucky!') : console.log('BAD!');
// console.log(num === 7 ? 'lucky!' : 'BAD!');

let status = 'offline';

let color = status === 'offline' ? 'red' : 'green';

// Switch Case Practice

let day = 4;

// if (day === 1) {
//     console.log('MONDAY');
// }
// else if (day === 2) {
//     console.log('TUESDAY');
// }
// else if (day === 3) {
//     console.log('WEDNESDAY');
// }
// else if (day === 4) {
//     console.log('THURSDAY');
// }
// else if (day === 5) {
//     console.log('FRIDAY');
// }
// else if (day === 6) {
//     console.log('SATURDAY');
// }
// else if (day === 7) {
//     console.log('SUNDAY');
// }
// else {
//     console.log('INVALID DAY');
// }

switch(day) {
    case 1:
        console.log('MONDAY');
        break;
    case 2:
        console.log('TUESDAY');
        break;
    case 3:
        console.log('WEDNESDAY');
        break;
    case 4:
        console.log('THURSDAY');
        break;
    case 5:
        console.log('FRIDAY');
        break;
    case 6:
        console.log('SATURDAY');
        break;
    case 7:
        console.log('SUNDAY');
        break;
    default:
        console.log('INVALID DAY');
}

// Operator Preceedence Practice 

let x = 7;
x == 7 || x === 3 && x > 10;

// Logical ! Practice

let loggedInUser;

// If there isn't a logged in user

if(!loggedInUser){
    console.log('GET OUT OF HERE!');
}

let flavor = 'grape';

// if(flavor !== 'grape' && flavor !== 'cherry'){
//     console.log('WE D0NT HAVE THAT FLAVOR!');
// }

if(!(flavor === 'grape' || flavor === 'cherry')){
    console.log('WE ONLY HAVE GRAPE AND CHERRY!');
}

// Logical || Practice

// let age = 30;

// if(age < 6 || age >= 65){
//     console.log("YOU GET IN FOR FREE!");
// }
// else {
//     console.log("YOU MUST PAY!");
// }

let color = "violet";

if(color === 'purple' || color === 'lilac' || color === 'violet'){
    console.log('GREAT CHOICE!');
}
     
// Logical && Practice

let password = 'chicken Gal';

if (password.length >= 8 && password.indexOf(' ') === -1) {
    console.log("VALID PASSWORD!");
} else {
    console.log("INVALID PASSWORD!");
}

let num = 1;

if (num >= 1 && num <= 10) {
    console.log('Number is between 1 and 10');
} else {
    console.log('Please guess a number between 1 and 10');
}

// Truthy and Falsy values Practice

let loggedInUser = "";

if(loggedInUser){
    console.log("YOU ARE LOGGED IN!");
}
else {
    console.log("PLEASE LOG IN!");
}

// Nesting Conditionals practice

let password = 'kitty';

if (password.length >= 6) {
    if (password.indexOf(' ') === -1) {
        console.log("Valid password!");
    } else {
        console.log("Password is long enough, but cannot contain spaces!");
    }
} else {
    console.log("Password must be longer!");
}

// If else and else practice

// Performance Review
// 3 - Superstar
// 2 - meets expectations
// 1 - needs improvement
// anything else - wtf?
let rating = 2;

if (rating === 3) {
    console.log('YOU ARE A SUPERSTAR!');
} 
else if (rating === 2) {
    console.log('MEETS EXPECTATIONS');
}
else if (rating === 1) {
    console.log('NEEDS IMPROVEMENT');
}
else {
    console.log('INVALID RATING!');
}

// Example 2

let highScore = 1430;
let userScore = 1200;

if(userScore >= highScore) {
    console.log(`Congrats, you have the new 
    high score of ${userScore}`);
    highScore = userScore;
}
else {
    console.log(
        `Good Game. Your score of ${userScore} did not 
        beat the high score of ${highScore}`
    )
}

Logical Statement Practice Ends Here */