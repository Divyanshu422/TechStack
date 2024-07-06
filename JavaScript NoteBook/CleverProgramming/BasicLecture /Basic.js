/* 
    * Printing on the window for i/p taking -> prompt and printing the 
    * result on the window using alert
*/
food = prompt('what is cost of the food in dollars');
tipPercentage = prompt('percentage of Tip')/100;
tipAmount = food * tipPercentage;

console.log('the tipAmount is ', tipAmount);
alert(tipAmount);