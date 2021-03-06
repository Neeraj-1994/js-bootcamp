
/* Array Practice

// Using Const with Arrays Practice

const myEggs = ['brown', 'brown'];
myEggs.push('purple');
console.log(myEggs);
myEggs[0] = 'green';
console.log(myEggs);

myEggs = ['blue', 'pink']; // Error in referencing

// intro to Reference Types Practice

let fruit = 'orange';
let color = fruit;
console.log(color);
console.log(fruit);
fruit = 'watermelon';
console.log(color);
console.log(fruit);

// Value Type Variable

let nums = [5,6,7,8];
let otherNums = nums;

nums.push(9);

// Sort Part 1 Practice

let people = ['Mrs. Robinson', 'Angie',
'Jolene', 'Maggie May', 'Roxanne'];

console.log(people.sort());

let nums = [34, 10, 100000, 67, 99];
console.log(nums.sort());

// Splice Practice

let animals = ['shark', 'salmon', 'whale', 
'bear', 'lizard', 'tortoise'];

// Just adding elements
animals.splice(1, 0, 'octopus');
console.log(animals);

// Just deleting elements
animals.splice(3, 2);
console.log(animals);

// Inserting many elements
animals.splice(3, 0, 'snake', 'frog');
console.log(animals);

// Replacing many elements
animals.splice(0, 2, 'SHARK!', 'OCTOPUS!');
console.log(animals);

// Slice Practice

let animals = ['shark', 'salmon', 'whale', 'bear', 
'lizard', 'tortoise'];

let swimmers = animals.slice(0, 3);

let mammals = animals.slice(2, 4);

let reptiles = animals.slice(4);

let quadruped = animals.slice(-3);

let tripeds = animals.slice(-3, -1);

// Reverse and Join Practice

let letters = ['T', 'C', 'E', 'P', 'S', 'E', 'R'];
// console.log(letters.reverse());

console.log(letters.join());
console.log(letters.join('&'));
console.log(letters.reverse().join('.'));
console.log(letters.join('-'));
console.log([12.3, 60, false].join());

// Includes and IndexOf Practice

let ingredients = [
    'water', 'corn starch', 'flour', 'cheese', 
    'brown sugar', 'shrimp', 'eel', 'butter'
];

console.log(ingredients.includes('fish'));
//expected output: false
console.log(ingredients.includes('shrimp'));
//expected output: true
console.log(ingredients.includes('corn'));
//expected output: false since it looks for direct match and not inside strings
console.log(ingredients.includes('water', 3));
//expected output: false as after index 3 there is no water

if(ingredients.includes('flour')) {
    console.log('I am gluten free, I cannot eat that');
}

console.log(ingredients.indexOf('eel')); // 6
console.log(ingredients.indexOf('maple syrup')); // -1
console.log(ingredients.indexOf('cheese', 5)); // -1

// Concat Practice

let fruits = ['apple', 'banana'];
let veggies = ['asparagus', 'brussel sprouts'];
let meats = ['chicken', 'pork', 'beef'];

console.log(fruits.concat(veggies));
console.log(veggies.concat(fruits));
console.log(fruits.concat(veggies, meats));

// Shift and Unshift Practice

let dishesToDo = ['big platter'];
dishesToDo.unshift('large plate');
console.log(dishesToDo);
dishesToDo.unshift('small plate');
console.log(dishesToDo);
dishesToDo.unshift('cereal bowl');
console.log(dishesToDo);
dishesToDo.unshift('mug');
console.log(dishesToDo);
dishesToDo.unshift('dirty spoon');
console.log(dishesToDo);

dishesToDo.shift();
console.log(dishesToDo);
dishesToDo.shift();
console.log(dishesToDo);
dishesToDo.shift();
console.log(dishesToDo);
dishesToDo.shift();
console.log(dishesToDo);
dishesToDo.shift();
console.log(dishesToDo);
dishesToDo.shift();
console.log(dishesToDo);

// Push And Pop Practice

let topSongs = [
    'First Time Ever I Saw Your Face',
    'God Only Knows',
    'A Day In The Life',
    'Life On Mars'
];

topSongs.push('Fortunate Son');
console.log(topSongs);
topSongs.pop();
console.log(topSongs);

// Modifying Arrays Practice

let shoppingList = ['Cheddar Cheese', '2% Milk'];

shoppingList[1] = 'Whole Milk'; // Updating Items in an array by accessing the index of the element
shoppingList[2] = 'Ice Cream';

shoppingList[shoppingList.length] = 'Tomatoes'; // If no. of items are unknown

// Array Indices Practice

let colors = ['red', 'orange', 'yellow', 'green', 
'blue', 'indigo', 'violet'];

console.log(colors.length); // 7 Length of the array
console.log(colors[0]); // "red" To access the first item
console.log(colors[1]); // "orange" To access the second item
console.log(colors[7]); // undefined because there is no 8th item, we are accessing something which is not there
console.log(colors[colors.length - 1]); // "violet" To access the last item

// Creating Arrays Practice 

let shoppingList = ['cereal', 'cheese', 'ice'];

let lotto = [45, 12, 23, 25, 34];

let myCollection = [12, 'dog', true, null, NaN];

console.log(typeof myCollection);

 Array Practice Ends Here */

 

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
