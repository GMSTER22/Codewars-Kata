/*
---------Instructions-------

The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollar bill. An "Avengers" ticket costs 25 dollars.

Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

Can Vasya sell a ticket to every person and give change if he initially has no money and sells the tickets strictly in the order people queue?

Return YES, if Vasya can sell a ticket to every person and give change with the bills he has at hand at that moment. Otherwise return NO.

--------Example-----------

tickets([25, 25, 50]) // => YES 
tickets([25, 100]) // => NO. Vasya will not have enough money to give change to 100 dollars
tickets([25, 25, 50, 50, 100]) // => NO. Vasya will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 50

---------check code on console------------
console.log(cashRegister, "CashRegister");
console.log(amount);
*/ 
let cashRegister = [];

let twentyFiveBill = 25;
let fiftyBill = 50;
let hundredBill = 100;

function tickets(peopleInLine){
    // ...
    peopleInLine.forEach(amount => {
        //$25 bill case
        // ((peopleInLine.indexOf(amount) === (peopleInLine.length - 1)) ? ;
        if (amount === twentyFiveBill) {
            cashRegister.push(amount);
            return "YES";
        //$50 bill case
        } else if (amount === fiftyBill) {
            if ( cashRegister.indexOf(twentyFiveBill) === -1) {
                return "No. Vasya will not have enough money to give change to 50 dollars";
            } else {                
                cashRegister.push(amount);
                cashRegister.splice(cashRegister.indexOf(twentyFiveBill), 1);
                return "YES";
            }
        //$100 bill case
        } else if (amount === hundredBill) {
            if ((cashRegister.indexOf(fiftyBill) !== -1) && (cashRegister.indexOf(twentyFiveBill) !== -1)) {
                cashRegister.push(hundredBill);
                cashRegister.splice(cashRegister.indexOf(fiftyBill), 1);
                cashRegister.splice(cashRegister.indexOf(twentyFiveBill), 1);                
                return "YES";
            } else {
                return "NO. Vasya will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 50";
            }
        }
    });
    cashRegister = [];
}


