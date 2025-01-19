/*1.
Write a function named `makeTea` that takes one parameter `typeOfTea`, 
and returns a string like `Making green tea`  when called with `green tea`.
Store the result in a variable named `teaOder
*/
function makeTea(typeOfTea) {
    return `Making ${typeOfTea}`
}

let result = makeTea("green tea");
//console.log(result);

/*2.
Create a function named orderTea` that takes one parameter, `teaTypes`.
Inside this function, create another function named `confimOrder` that
returns a message like`Order confirmed for chai`.
Call confirmOrder from within orderTea and return the result.
*/
function orderTea(teaTypes) {
    function confimOrder() {
        return `Order confirmed for chai`;
    }
    return confimOrder();
}
let orderTeaResult = orderTea('chai');
//console.log(orderTeaResult);

/*3.
Write an arrow function named `calculateTotal` that takes two parameters:
`price` and `quantity`. The function should return the total cost by 
multiplying the `price` and `quantity`.
Store the result in a variable named `totalCost`.
*/
// const calculateTotal = (price, quantity) => {
//     return price * quantity
// }
// let totalCost = calculateTotal(2, 5)
// console.log(totalCost)

//OR
const calculateTotal = (price, quantity) => price * quantity;
