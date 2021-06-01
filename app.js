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
let password = 'kitty';
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