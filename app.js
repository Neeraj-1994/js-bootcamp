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
