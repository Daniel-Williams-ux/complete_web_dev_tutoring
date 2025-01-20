/* 
Arrays and Methods
Utilise the inbuilt methods of arrays in Javascript to solve the below tasks:
*/

/*1.
Task 1: Array Filtering
Write a function filterNumbers(arr) that returns only numbers from a mixed array
*/

// function filterNumbers(arr) {
//     let newArr = []; // Declare the array inside the function to avoid global scope issues.
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] === "number") { // Check if the element is a number.
//             newArr.push(arr[i]); // Add numbers to the new array.
//         }
//     }
//     return newArr; // Return the filtered array.
// }
function filterNumbers(arr) {
  return arr.filter((item) => typeof item === "number");
}


//console.log(filterNumbers([1, "John", 5, true, null, 9])); // [1, 5, 9]


/*
Task 2: Array Reversal
Write a function reverseArray(arr) that reverses the array
 */
function reverseArray(arr) {
  return arr.reverse();
}
//console.log(reverseArray([1, 2, 3]));


/*
Task 3: Find Maximum in an Array
Write a function findMax(arr) that returns the largest number in the array
 */
function findMax(arr) { 
  return Math.max(...arr);
}
//console.log(findMax([2, 5, 7, 1]));

/*
Task 4: Remove Duplicates from an Array

Write a function removeDuplicates(arr) that 
returns a new array with all duplicates removed
 */
function removeDuplicates(arr) {
  return [...new Set(arr)];
}
//console.log(removeDuplicates([2, 13, 4, 4, 2, 13, 13, 4, 4, 5, 5, 6, 6, 7, 5, 32, 13, 4, 5]));


/* 
Task 5: Flatten a Nested Array

Write a function flattenArray(arr) that takes a nested 
array and returns a single flattened array
*/
function flattenArray(arr) {
    //return arr.flat(2);
    return arr.flat(Infinity);
}
console.log(flattenArray([[1, 2, [3, 4]]]));

