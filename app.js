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