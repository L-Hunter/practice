// Write a program to calculate the total price of your phone pur‐ chase. You will keep purchasing phones (hint: loop!) until you run out of money in your bank account. You’ll also buy accessories for each phone as long as your purchase amount is below your mental spending threshold.
// • After you’ve calculated your purchase amount, add in the tax, then print out the calculated purchase amount, properly formatted.
// • Finally, check the amount against your bank account balance to see if you can afford it or not.
// • You should set up some constants for the “tax rate,” “phone price,” “accessory price,” and “spending threshold,” as well as a variable for your “bank account balance.”
// • You should define functions for calculating the tax and for for‐ matting the price with a “$” and rounding to two decimal places.
// • Bonus Challenge: Try to incorporate input into this program, perhaps with the prompt(..) covered in “Input” on page 6. You may prompt the user for their bank account balance, for example. Have fun and be creative!

var bankAccount = prompt();
var phonePrice = 99.99;
var accessories = 11.99;
var purchase = phonePrice + accessories;
var taxRate = .08;
var spendingThreshold = 350;
var bill = 0.00;


function buyPhones(){
  while (bankAccount >= spendingThreshold) {
  	bankAccount -= purchase;
  	bill += purchase;
  }
  
  function taxation(subtotal){
    var tax = subtotal * taxRate;
    bankAccount -= tax;
    return subtotal + tax;
  }

  function costDisplay(total){
	  console.log("Grand Total: $" + total.toFixed(2));
	  console.log("Bank account balance: $" + bankAccount.toFixed(2));
  }
  
  costDisplay(taxation(bill));
}

buyPhones();
