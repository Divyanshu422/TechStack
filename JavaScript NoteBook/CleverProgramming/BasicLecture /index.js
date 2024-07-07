/*
    Function:
    1. Functions are objects in JavaScript and have properties and methods
    2. Functions are first-class citizens in JavaScript - they can be 
       assigned to variables, passed as arguments, and returned from other 
       functions
    3. 

*/

    function greeting (name){
        console.log('hi ', name,', Nice to meet to you');
        console.log('hi ' + name + ', Nice to meet to you');

        // Using Template Literals:

        console.log(`hi ${name}, Nice to meet to you`);
    }

    //  Invoking the function:
    greeting('Divyanshu');


    /*
        * A function which is named as sum
        * take 2 argument
        * does: return the addition of the 2 number. 
        * the return keyword/statement stops the execution of a function and return a value.
    */

    function sum (a , b){
        return (a+b)
    }

    console.log(sum(10, 20));