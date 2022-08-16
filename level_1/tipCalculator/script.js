let restaurantBill = prompt("Enter your bill: ");

console.log(`Your restaurant bill is ${restaurantBill} and the ${(restaurantBill >= 50 && restaurantBill <= 300) ? 15 : 20}% tip will be ${(restaurantBill >= 50 || restaurantBill <= 300) ? (restaurantBill * .15) : (restaurantBill * .20)}. and the total bill is ${(restaurantBill >= 50 && restaurantBill <= 300) ? (restaurantBill * .15 + restaurantBill) : (restaurantBill * .20 + restaurantBill)}`)

