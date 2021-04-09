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