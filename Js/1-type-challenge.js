/*
Playing with Types
Task 1:

Write a function stringToNumber that takes a string input and tries to 
convert it to a number. If the conversion fails, return "Not a number".
*/
function stringToNumber(input) {
  const number = Number(input);

  if (isNaN(number)) {
    return `Not a number`
  }
  return number;
}
// let result1 = stringToNumber('John')
// let result2 = stringToNumber("123");
// let result3 = stringToNumber("40.64");

// console.log(result1);
// console.log(result2);
// console.log(result3);

/*
Task 2:

Write a function flipBoolean that takes any input and 
converts it to its boolean equivalent, then flips it. 
For example, true becomes false, 0 becomes true, etc.
*/

function flipBoolean(input) {
  // Convert input to its boolean equivalent and flip it
  const flipped = !Boolean(input);

  // Return the flipped value
  return flipped;
}

// Example usage:
// let bool1 = flipBoolean(true); // Should return false
// let bool2 = flipBoolean(false); // Should return true
// let bool3 = flipBoolean(0); // Should return true
// let bool4 = flipBoolean(1); // Should return false
// let bool5 = flipBoolean(34); // Should return false
// let bool6 = flipBoolean(""); // Should return true
// let bool7 = flipBoolean(null); // Should return true
// let bool8 = flipBoolean("text"); // Should return false

// console.log(bool1);
// console.log(bool2);
// console.log(bool3);
// console.log(bool4);
// console.log(bool5);
// console.log(bool6);
// console.log(bool7);
// console.log(bool8);


/*
Task 3:

Write a function whatAmI that takes an input and 
returns a string describing its type after conversion. 
If it's a number, return "I'm a number!", if it's a string, return 
"I'm a string!"
*/
function whatAmI(input) {
  // Check the type of input and return a descriptive message
  if (typeof input === "number") {
    return "I'm a number!";
  } else if (typeof input === "string") {
    return "I'm a string!";
  } else {
    return "I'm something else!";
  }
}

// let result1 = whatAmI(42); // Should return "I'm a number!"
// let result2 = whatAmI("Hello"); // Should return "I'm a string!"
// let result3 = whatAmI(true); // Should return "I'm something else!"
// let result4 = whatAmI([]); // Should return "I'm something else!"

// console.log(result1);
// console.log(result2);
// console.log(result3);
// console.log(result4);

/*
Task 4:

Write a function isItTruthy that takes an input and returns 
"It's truthy!" if the value is truthy in JavaScript, or "It's falsey!" 
if it's falsey.
 */
function isItTruthy(input) {
  if (input) {
    return `It's truthy`
  }
  return `It's falsey`
}

console.log(isItTruthy(true));
console.log(isItTruthy({}));
console.log(isItTruthy([]));
console.log(isItTruthy(43));
console.log(isItTruthy(new Date()));
console.log(isItTruthy(true));
console.log(isItTruthy('false'));
console.log(isItTruthy(false));
