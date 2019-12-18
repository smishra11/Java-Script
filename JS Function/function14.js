//Write a JavaScript function to convert an amount to coins

let amount = 58;
let coins = [10,5,2,1];

function amountToCoin(amount, coins) {
    if(amount === 0) {
        return [];
    } else {
        if(amount >= coins[0]) {
            left = (amount - coins[0]);
            return [coins[0]].concat(amountToCoin(left, coins));
        } else{
            coins.shift();
            return amountToCoin(amount, coins);
        }
    }
}
console.log(amountToCoin(amount, coins));