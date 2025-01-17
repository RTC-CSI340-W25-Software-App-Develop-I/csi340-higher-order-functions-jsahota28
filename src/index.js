// 1. Introduction to Higher Order Functions
// Callback function definition
const callback = ()=>
{
  console.log("callback function");
}

const higherOrder = (foo) => {
  console.log("Higher Order Function");
  return foo(); // Execute the callback function
  };

// Higher Order Function definition

// Pass the Higher Order Function the Callback function as an argument



// Example data for 2 and 3


const brunchMenu = [
  "eggs benedict",
  "huevos rancheros",
  "fried chicken & waffle",
  "fried egg sandwich",
];
const brunchPrices = [15.0, 16.0, 18.0, 12.0];
const uppercaseMenu = brunchMenu.map((menuItem) => menuItem.toUpperCase());
console.log("Upper case Menu:",uppercaseMenu);

const cheaperMenuPrices = brunchPrices.filter((price) => price < 17);
console.log("Cheaper Menu Prices",cheaperMenuPrices);


// 2. Built-in Higher Order Functions

// Map - "Transforms" each item in the array and returns a new array

// Filter - Returns a new array with items that pass the condition in the callback
