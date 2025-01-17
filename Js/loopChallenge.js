/*1.
write a 'while' loop that calculates the sum of all numbers from 1 to 5 and 
stores the result in a varable named 'sum'
*/
let sum = 0;
let i = 1;
while (i <=5) {
    sum += i;
    i++;
}
console.log(sum);

/*2.
write a 'while' loop that counts down from 5 to 1 and stores the number in an array named 'countdown'.
*/
54321
let countdown = []
let a = 5;
while (a > 0) {
    countdown.push(a);
    a--
}
console.log(countdown);

/*3.
write a 'do while' loop that prompts a user to enter their favourite tea until they enter 'stop'.
store each tea in an array named 'teaCollection'.
*/
teaFavourite = [];
let tea;

do {
    tea = prompt("Enter your favourite teas and type 'stop' when you are done")
    if (tea !== 'stop') {
        teaFavourite.push(tea)
    }
} while (tea !== "stop");

/*4.
Write a `do while` loop that adds numbers from 1 to 3 and stores the result in a 
variable named `total`.
*/
let total = 0;
let i = 1;
do {
    total += i;
    i++;
} while (i <= 3);
console.log(total)

/*5.
write a `for` loop that multiplies each element in the array `[2, 4, 6]` by 2
and stores the results in a new array named `multipliedNumbers`.
*/
let multipliedNumbers = [];
let nums = [2, 4, 6];

for (let i = 0; i < nums.length; i++) {
    let total = nums[i] * 2;
    multipliedNumbers.push(total);
}
console.log(multipliedNumbers);

/*6.
Write a `for` loop that lists all the cities in the array 
`["Paris", "New York", "Tokyo", "Londo"]` and stores each city in a new array named
`cityList`.
*/
let cityList = [];
myarr = ["Paris", "New York", "Tokyo", "Londo"];

for (let i = 0; i < myarr.length; i++) {
    count = myarr[i]
    cityList.push(count)
}
console.log(cityList);
