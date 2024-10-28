//Write a function which will take 2 numbers as inout and will return the total carry count.
//For example you have 2 numbers 9 & 12 as input and you get 1 carry by adding these 2 numbers so your function will return 1.


function countCarry(num1, num2) {
    let carry = 0;
    let carryCount = 0;
    
    while (num1 > 0 || num2 > 0) {
        const digit1 = num1 % 10;
        const digit2 = num2 % 10;
        
        const sum = digit1 + digit2 + carry;
        
        if (sum >= 10) {
            carry = 1;
            carryCount++;
        } else {
            carry = 0;
        }
        
        // here we remove last digit from both nymbers
        num1 = Math.floor(num1 / 10);
        num2 = Math.floor(num2 / 10);
    }
    
    return carryCount;
}

console.log(countCarry(9, 12));

