
// Accessing Object Properties Practice

// Example 1: Use Case 1
const numbers = {
    100: 'one hundred',
    16: 'sixteen',
    '76 trombones': 'great song!'
}

console.log(numbers[100]);
console.log(numbers[16]);
console.log(numbers['76 trombones']);

const numberStrings = {
    '100': 'one hundred',
    '16': 'sixteen'
}

console.log(numberStrings['100']);
console.log(numberStrings['16']);

// Example 2: Use Case 2
const pallete = {
    red: '#eb4d4b',
    yellow: '#f9ca24',
    blue: '#30336b'
};

let mysteryColor = 'yellow';

console.log(pallete[mysteryColor]);
console.log(pallete["bl"+"ue"]);