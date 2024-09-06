// #1. Write a series of nested ternary statements that sets the variable category equal to:

// "herbivore" if an animal eats plants
// "carnivore" if an animal eats animals
// "omnivore" if an animal eats plants and animals
// "undefined" if an animal doesn't eat plants or animals.

// Solution #1

// Here’s a series of nested ternary statements to set the variable category based on what an animal eats:
// Javascript:
// let eatsPlants = true;  // Example value
// let eatsAnimals = false; // Example value

// let category = eatsPlants
//   ? (eatsAnimals ? "omnivore" : "herbivore")
//   : (eatsAnimals ? "carnivore" : "undefined");

// console.log(category);

// This code checks:

// If eatsPlants is true:
// If eatsAnimals is also true, it sets category to "omnivore".
// Otherwise, it sets category to "herbivore".
// If eatsPlants is false:
// If eatsAnimals is true, it sets category to "carnivore".
// Otherwise, it sets category to "undefined".
// This way, the correct category is assigned based on the conditions.



    //  without nest
// #2.  Write a series of ternary statements that sets the variable category equal to:

// "herbivore" if an animal eats plants
// "carnivore" if an animal eats animals
// "omnivore" if an animal eats plants and animals
// "undefined" if an animal doesn't eat plants or animals.

// Solution #2

// Here is the series of ternary statements that sets the variable category according to the specified conditions:
// Javascript:
// let eatsPlants = false;  // Example value
// let eatsAnimals = false; // Example value

// let category = eatsPlants && eatsAnimals
//   ? "omnivore"
//   : eatsPlants
//   ? "herbivore"
//   : eatsAnimals
//   ? "carnivore"
//   : "undefined";

//  console.log(category);

// This code works as follows:

// If eatsPlants and eatsAnimals are both true, it sets category to "omnivore".
// If only eatsPlants is true, it sets category to "herbivore".
// If only eatsAnimals is true, it sets category to "carnivore".
// If neither eatsPlants nor eatsAnimals is true, it sets category to "undefined".
// Each condition is checked sequentially using nested ternary operators.


// #3. How many times will the while loop run?
// let x = 10;
// while (x <= 25) {
//   console.log('Printing out x = ' + x);
//   x = x + 2;
// }



// #4.Directions:
// For this quiz, you're going to create a function called buildTriangle() that will accept an input (the triangle at its widest width) and will return the string representation of a triangle.

// Solution #4

function buildTriangle(width) {
  let triangle = '';

  // Build the triangle one row at a time
  for (let i = 1; i <= width; i++) {
    // Add 'i' asterisks followed by a newline character
    triangle += 'A'.repeat(i) + '\n';
  }

  return triangle;
}

// Example usage:
console.log(buildTriangle(25));
