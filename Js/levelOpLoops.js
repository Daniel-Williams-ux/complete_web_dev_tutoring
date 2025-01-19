/*1.
write a `for` loop that loops through the array 
["green tea", "black tea", "chai", "oolong tea"] and stops the loop when it 
finds `chai`.
    store all teas before `chai` in a new array named `selectedTea`.
*/
let listedTea = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTea = [];
for (let i = 0; i < listedTea.length; i++) {
  if (listedTea[i] === "chai") {
    break;
  }
  selectedTea.push(listedTea[i]);
}
//console.log(selectedTea);

/*2.
Write a `for` loop that loops through the array 
`["London", "New York", "Paris", "Berlin"]` and skips `"Paris"`.
    Store the other cities in a new array named `visitedCities`
*/
arrCities = ["London", "New York", "Paris", "Berlin"];
visitedCities = [];
for (let i = 0; i < arrCities.length; i++) {
  if (arrCities[i] === "paris" || arrCities[i] === "Paris") {
    continue;
  }
  visitedCities.push(arrCities[i]);
}
//console.log(visitedCities);

/*3.
Use a `for-of` loop to iterate through the array `[1, 2, 3, 4, 5]` and stop when
the number `4` is found.
    Store the numbers before `4` in an array named `smallNumbers`.
*/
let numbers = [1, 2, 3, 4, 5];
let smallNumbers = [];
for (const num of numbers) {
  if (num === 4) {
    break;
  }
  smallNumbers.push(num);
}
//console.log(smallNumbers);

/*4.
Use a `for-of`loop to iterate through the array
["chai", "green tea", "herbal tea", "black tea"] and skip `herbal tea`. 
    store the other tea in an array named ``preferredTeas.
*/
let arrTea = ["chai", "green tea", "herbal tea", "black tea"];
let preferredTea = [];
for (const tea of arrTea) {
  if (tea === "herbal tea") {
    continue;
  }
  preferredTea.push(tea);
}
//console.log(preferredTea);

/*5.
Use a `for-in` loop to loop through an object containing city populations.
    Stop the loop when the population of "Berlin" is found and store all previous
    cities' populations in a new object named `cityPopulations`.

    let citiesPopulation = { 
        "London": 8900000,
        "New York": 8400000,
        "Paris": 2200000,
        "Berlin": 3500000
    }
*/
let citiesPopulation = {
  London: 8900000,
  "New York": 8400000,
  Paris: 2200000,
  Berlin: 3500000,
};
let newCities = {};
//console.log(Object.keys(citiesPopulation));
//console.log(Object.values(citiesPopulation));

for (const value in citiesPopulation) {
    if (value == "Berlin") {
        break;
    }
    newCities[value] = citiesPopulation[value];
}
//console.log(newCities);


/*6.
Use a `for-in` loop to loop through an object containing city populations.
    Skip any city with a population below 3 million and store the rest in a
    new object named `largeCities`.

    let worldCities = {
        "Sydney": 5000000,
        "Tokyo": 9000000,
        "Berlin": 3500000,
        "Paris": 2200000
    };  
*/
let worldCities = {
    "Sydney": 5000000,
    "Tokyo": 9000000,
    "Berlin": 3500000,
    "Paris": 2200000
}
let largeCities = {};

for (const value in worldCities) {
    if (worldCities[value] < 3000000) {
        continue;
    }
    largeCities[value] = worldCities[value]
}
//console.log(largeCities);

/*7.
Write a forEach loop that iterates through the array 
["earl grey", green tea", "chai", "oolong tea"]. 
    Stop the loop when "chai" is found and store all previous tea types in an array named 
    `availableTeas`.
*/
let teaCollection = ["earl grey", "green tea", "chai", "oolong tea"];
let availableTeas = [];
teaCollection.forEach(function (tea) {
    if (tea === "chai") {
        return;
    }
    availableTeas.push(tea)
});
//console.log(availableTeas);

/*
Your code is close to correct, but there's a key issue: the return statement inside the forEach callback function does not stop the loop. 
The return statement only exits the current iteration of the callback, but the forEach loop itself will continue iterating over the rest 
of the array.If you want to stop the loop entirely, forEach is not the right choice.

To achieve the desired behavior, you can use a standard for loop or a for...of loop,
    which allows you to break out of the loop when "chai" is encountered.

Correct Implementation:
Using a for loop:


let teaCollection = ["earl grey", "green tea", "chai", "oolong tea"];
let availableTeas = [];

for (let tea of teaCollection) {
    if (tea === "chai") {
        break; // Stop the loop when "chai" is found
    }
    availableTeas.push(tea);
}

console.log(availableTeas); // Output: ["earl grey", "green tea"]
Explanation:
for...of Loop:

The for...of loop iterates through each element in the teaCollection array.
When "chai" is found, the break statement immediately stops the loop.
Adding to availableTeas:

Each tea type encountered before "chai" is pushed into the availableTeas array.
Final Output:

The availableTeas array contains only the teas before "chai".
Why forEach Doesn't Work:
The forEach method doesn't support breaking out of the loop early. Instead, it will iterate over all elements
 in the array regardless of any return statements in the callback function. To achieve the desired behavior, you need
a loop structure like for, for...of, or while that allows the use of break.

Alternate Solution Using forEach:
If you're required to use forEach, you can simulate the behavior by adding a conditional flag to prevent further 
additions to the availableTeas array after "chai" is found:


let teaCollection = ["earl grey", "green tea", "chai", "oolong tea"];
let availableTeas = [];
let stopAdding = false;

teaCollection.forEach(function (tea) {
    if (tea === "chai") {
        stopAdding = true; // Set flag to true to stop adding
    }
    if (!stopAdding) {
        availableTeas.push(tea);
    }
});

console.log(availableTeas); // Output: ["earl grey", "green tea"]
This solution achieves the same result, though it is less elegant than using a for loop.
*/

/*8.
Write a forEach loop that iterates through the array
["Berlin", "Tokyo", "Sydney", "Paris"].
    Skip "Sydney" and store the other cities in a new array named `traveledCities`.
*/
let countries = ["Berlin", "Tokyo", "Sydney", "Paris"];
newArr = [];
countries.forEach((el) => {
    if (el === "Sydney") {
        return;
    }
    newArr.push(el)
})
//console.log(newArr);

/*9.
Write a for loop that iterates through the array [2, 5, 7].
    Skip the value 7 and multiplythe rest by 2. Store the results in
    a new array named doubleNumbers`.
*/
let arr = [2, 5, 7];
let doubleNumber = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 7) {
        continue;
    }
    doubleNumber.push(arr[i] * 2);
}
//console.log(doubleNumber);


/*10.
Use a `for-of` loop to iterate through the array 
`["chai", "green tea", "black tea", "jasmine tea", "herbal tea"]`
    and stop when the length of the current tea name is greater than 10.
    Store the teas iterated over in an array named `shortTeas.
*/
teaArr = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"];
//console.log("herbal tea".length);
shortTeas = [];

for (const teas of teaArr) {
    if (teas.length > 10) {
        break;
    }
    shortTeas.push(teas)
}
console.log(shortTeas);
