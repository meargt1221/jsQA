// // #1. Write a series of nested ternary statements that sets the variable category equal to:

// // "herbivore" if an animal eats plants
// // "carnivore" if an animal eats animals
// // "omnivore" if an animal eats plants and animals
// // "undefined" if an animal doesn't eat plants or animals.

// // Solution #1

// // Here’s a series of nested ternary statements to set the variable category based on what an animal eats:
// // Javascript:
// // let eatsPlants = true;  // Example value
// // let eatsAnimals = false; // Example value

// // let category = eatsPlants
// //   ? (eatsAnimals ? "omnivore" : "herbivore")
// //   : (eatsAnimals ? "carnivore" : "undefined");

// // console.log(category);

// // This code checks:

// // If eatsPlants is true:
// // If eatsAnimals is also true, it sets category to "omnivore".
// // Otherwise, it sets category to "herbivore".
// // If eatsPlants is false:
// // If eatsAnimals is true, it sets category to "carnivore".
// // Otherwise, it sets category to "undefined".
// // This way, the correct category is assigned based on the conditions.



//     //  without nest
// // #2.  Write a series of ternary statements that sets the variable category equal to:

// // "herbivore" if an animal eats plants
// // "carnivore" if an animal eats animals
// // "omnivore" if an animal eats plants and animals
// // "undefined" if an animal doesn't eat plants or animals.

// // Solution #2

// // Here is the series of ternary statements that sets the variable category according to the specified conditions:
// // Javascript:
// // let eatsPlants = false;  // Example value
// // let eatsAnimals = false; // Example value

// // let category = eatsPlants && eatsAnimals
// //   ? "omnivore"
// //   : eatsPlants
// //   ? "herbivore"
// //   : eatsAnimals
// //   ? "carnivore"
// //   : "undefined";

// //  console.log(category);

// // This code works as follows:

// // If eatsPlants and eatsAnimals are both true, it sets category to "omnivore".
// // If only eatsPlants is true, it sets category to "herbivore".
// // If only eatsAnimals is true, it sets category to "carnivore".
// // If neither eatsPlants nor eatsAnimals is true, it sets category to "undefined".
// // Each condition is checked sequentially using nested ternary operators.


// // #3. How many times will the while loop run?
// // let x = 10;
// // while (x <= 25) {
// //   console.log('Printing out x = ' + x);
// //   x = x + 2;
// // }



// // #4.Directions:
// // For this quiz, you're going to create a function called buildTriangle() that will accept an input (the triangle at its widest width) and will return the string representation of a triangle.

// // Solution #4

// // function buildTriangle(width) {
// //   let triangle = '';

// //   // Build the triangle one row at a time
// //   for (let i = 25; i <= width; i--) {
// //     // Add 'i' asterisks followed by a newline character
// //     triangle += 'A'.repeat(i) - '\n';
// //   }

// //   return triangle;
// // }

// // // Example usage:
// // console.log(buildTriangle(1));

// // example1 callback function expression


// // const doSomething = function addone(y) {
// //   return y + 1;
// // };

// // console.log(doSomething(9));


// // ###inline function expression


// // const laugh = function(num) {
// //   // Initialize sound as an empty string
// //   let sound = ""; 
  
//   // Iterate 'num' times
// //   for (let x = 0; x < num; x++) {
// //     sound = sound + "ha"; // Append "ha" to sound
// //   }
  
// //   sound = sound + "!"; // Add "!" at the end
// //   return sound; // Return the constructed sound
// // };

// // // Example usage:
// // console.log(laugh(15)); // Outputs: "hahaha!"


// // #5. Directions:
// // Write a named function expression that stores the function in a variable called cry and returns "boohoo!". Don't forget to call the function using the variable name, not the function name:


// // // Solution #5
// // const cry = function(amnt){
// //   let sound= "";
// //  for (let x=0; x < amnt; x++) {
// //       sound = sound + "boohoo";
// //  }
// //  sound = sound + "!";
// //  return sound;

// // }
// // console.log(cry(2));






// // Let us take an iteration variable, that represent the remaining Time in seconds
// // let n = 60

// // // While loop with a stop condition
// // while (n >= 0) {
// //     if (n === 50) {
// //         console.log("Orbiter transfers from ground to internal power");
// //     }
// //     else if (n === 31) {
// //         console.log("Ground launch sequencer is go for auto sequence start");
// //     }
// //     else if (n === 16) {
// //         console.log("Activate launch pad sound suppression system");
// //     }
// //     else if (n === 10) {
// //         console.log("Activate main engine hydrogen burnoff system");
// //     }
// //     else if (n === 6) {
// //         console.log("Main engine start");
// //     }
// //     else if (n === 0) {
// //         console.log("Solid rocket booster ignition and liftoff!");
// //     }
// //     else{
// //         console.log("T-"+n+" seconds");
// //     }
    
// //     //Never forget to decrement/increment the iteration variable in a while loop
// //     // Otherwise, you loop will run infinite iterations
// //     n = n-1;
// // }


// // UdacityFamily

// // let udacityFamily = ["Mearg","Julia","James"];

// // for (let index=0; index < udacityFamily.length; index++){
// // console.log(udacityFamily[index]);
// // }


// // let x=1;
// //  for(let i = 1; i <= 12 ; i++) {
// //   x*=i
// // }
// // console.log(x);

// // function factorial(n){
// //   if (n===0 || n===1){
// //     return 1;
// //   } else {
// //   return n*factorial(n-1);
// // }
// // }
// // console.log(factorial(12));



// // function x(r){
// //   if (r===0||r===1){
// //     return 1;
// //   }else{
// //     return r*x(r-1);
// //   }
// // }
// // console.log(x(3));

// Method #one

// function laugh(num){
//     let txt= ""
//     for (i = 1; i<=num; i++) {
//       txt += "ha"
//       return txt;
//     }
// }
// console.log(laugh(1)+"!");

// #Laughing

// function laugh(num) {
//   let text = ""
//   for (let i =1; i <= num; i++){
//       text += "ha"
//   }
//   if (num>0) {
//       text += "!"
//   }
//   return text;
// }
// console.log (laugh(3));


// #Array

// const donuts = ["glazed", "chocolate frosted", "boston cream", "powdered", "sprinkled", "maple", "coconut", "jelly"];

// donuts[2] = "cinnamon twist";
// donuts[4] = "salted caramel";
// donuts[5] = "shortcake eclair";
// console.log(donuts[2,4,5]);



// exercise

var udacityFamily = ['James', 'Julia', 'Mearg']
for (let index = 0; index < udacityFamily.length; index++){
console.log(udacityFamily[index]);}