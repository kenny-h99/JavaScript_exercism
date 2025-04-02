//  here we are working with reassignment and focusing on the use of variables

// A variable can reference different values over its lifetime when using let or var. For example,
//  myFirstVariable can be defined and redefined many times using the assignment operator =:
let myFirstVariable = 1; // myFirstVariable is now 1

console.log(myFirstVariable);

myFirstVariable = 'some string'; // myFirstVariable is now 'some string'\
//myFirstVariable = new SomeComplexClass();

console.log(myFirstVariable);

// In contrast to let and var, variables that are defined with const can only be assigned once. 
// This is used to define constants in JavaScript.
const myConstant = 10; // myConstant is now 1

console.log(myConstant);

//myConstant = 2; // TypeError: Assignment to constant variable.

//console.log(myConstant);


//function declarations

function add(num1, num2) {
    return num1 + num2;
}

// call the function with arguments 2 and 3
console.log(add(2, 3)); // Output: 5

// lets try a function that adds two words together

export function addWords(word1, word2) {
    return word1 + word2;
}

console.log(addWords("Bat","Man")); // Output: BatMan

// now we will work with export functions and import functions

export let myNumber = 5; // Exporting a variable