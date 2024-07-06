/*
    * Variable In javaScript => var, let and const, automatically
    * Variables declared with var are function-scoped, while let and const are block-scoped.
    * Variable declared with var can be redeclared whereas not the case with the const and let.
            * within the same block, we cant declare same variable 2 times using the let keyword but allowed with var
    * Prefer not to use var becoz of issue in block-scopped.
*/

const accountId = 12345;        // Cant be changed
let accountEmail = 'divyanshu422@gmail.com';
var accountPassword = '12345';
accountCity = 'Jaipur';     // Automatically defined -> no used of keyword

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity]);