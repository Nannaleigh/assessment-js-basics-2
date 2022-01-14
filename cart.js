///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce(function(accumulator, element){
    return accumulator + element.price;
},0)

console.log(summedPrice)

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

function calcFinalPrice(cartTotal, couponValue, tax) {
    let taxTotal = cartTotal * tax;
    return cartTotal + taxTotal - couponValue;
}
console.log(calcFinalPrice(35.99, .06, 5.00));

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    The properties I've given my customer object are all things that a restaurant would need to know to create a general customer profile. Since they are in the delivery business, knowing the address is key
    as well as knowing the telephone number to store customer information or contact them about an order. The email is where a confirmation email would go for delivery receipt and updates and if the restaurant wants 
    to do a membership or rewards program, it would be important to know so they could add whatever rewards the customer accumulated on that order. 

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

const customer = {
    name: 'Customer First and Last' ,
    address: 'Address',
    telephone: '801-969-0351',
    email: 'generalemail@gmail.com',
    membership: true,
}
