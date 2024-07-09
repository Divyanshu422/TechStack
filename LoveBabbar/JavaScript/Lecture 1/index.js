/*
        * Html used for skelton of the webpage
        * CSS: used for the styling the content
        * JavaScript: to provide the functionality or behaviour of webpage
         
        ! what is JavaScript?
            * It is lightweight programming language or scripting language
            * Originated by Netscape company in late 1990s.
            * Originally JS was created as a client side language [i.e. to execute the JS Code only in the Browser]
            * To execute the JS code on the browser => we need to have a JS Engine
                * Example of JS engine: SpiderMonkey (in Morzilla) and V8 (chrome)

        ! What is Node.js?
            * Node.js uses the V8 JavaScript engine, the same engine that powers Google Chrome, to execute JavaScript code. 
            * It is an open source & cross-platform JS environment which is used by developer for the server-side code
                 *  C++ code and V8 engine is integrated => result into the node.js
            * 
*/
// ----------***********----------***********----------***********----------
/*
    ! Difference btw parse and render
    *  Parsing is the process of analyzing the structure of the HTML, CSS, and JavaScript code to create an 
    * internal data structure that the browser can understand. For HTML, parsing converts the HTML text into a 
    * Document Object Model (DOM) tree, which represents the structure of the web page. For CSS, parsing converts the 
    * CSS text into a CSS Object Model (CSSOM), which represents the styling rules. Parsing happens before rendering.  
    

    * Rendering is the process of converting the internal data structures (DOM and CSSOM) into a 
    * visual representation that can be displayed on the user's screen.

*/

// ----------***********----------***********----------***********----------


/*
    What is variable
        * named memory location is called variable
        * In Js, variable can be created using following keyword: let, var and const

                * let has the block scope whereas the var has the var has functional scope (global scope) 

                * we cannot declare a variable more than once if we defined that previously in the same scope using the let keyword but can be done using var keyword 

        * Js is dyanmic type language. that is developer need to to identify the data_type of variable. rather it is decided on the basis of value assigned to the variable
*/
        let a = 'divyanshu';
        // console.log(a);     // divyanshu
        a = 22;
        // console.log(a);     // 22


// ----------***********----------***********----------***********----------

/*
    ! Primitive dataType:
        * Stirng: sequence of charater
        * Number: integer + floating values
        * Boolean: 
        * Undefined: variable declared but not initialised
        * Null: null is a primitive value that represents the intentional absence of any object value. It is typically assigned explicitly by the developer.

*/

        let value;
        // console.log(value)      //* undefined
        let value2 = null; // Developer is intentionally defining the absence of the vaalue
        // console.log(value2)    //* null



// ----------***********----------***********----------***********----------


/*
    * Reference type in javaScript:
            * Object, arrays and function
            * Object is created using squiggle brackets {}, arrays is created using square keyword []
            * To access the object properties => we can use dot and bracket notation.

            * In javaScript the array is an dataStructure which is used to contains the list of items which can be homogenous or heterogenous. To access the element of array => indexing is used

*/


        let object = {
            name : 'Divyanshu',
            age: '30',
            address: 'Delhi',
            profession: 'High paid Developer'
        }

        //* using the dot notation
        //console.log(object.name);     // Divyanshu

        //* using the bracket notation:
        // console.log(object['profession']);  // High paid Developer.
        //  In the bracket notation we can pass the expression which can evaluate to the key of the object
        // check following video: https://www.youtube.com/watch?v=AzVvBO65SMc&t=522s&ab_channel=DeeecodeTheWeb


        // !  Arrays: storing the heterogenous data
        let arr = ['Divyanshu', 22, true];
        // console.log(arr);       //* [ 'Divyanshu', 22, true ]

        //  console.log(arr[10]);   //* undefined not error


// ----------***********----------***********----------***********----------

/*
        * Operator:
            * Arthimetic operator: +, -, *, /, %, ** (exponential)
            * Pre/post-> increment and decrement
            * Assignment operator (=)
            * comparison operator: >, >=, <, <=, ===, !==. [the result of comparison operator is always boolean value]
                        * ===: Strict comparison: i.e. both value and dataType is checked 
                        * there are 2 types of equality: Loose equality (==) and Strict equality (===)
            * Ternary Operator => aka conditional operator
            * Logical operator: And(&&), Or(||), Not (!)

*/

        // 2^3
            // console.log(2**3);      // *


        let num1 = 1;
        let num2 = '1';     // String
        //console.log(num1 == num2);  //* true: only checks the value. @implicity converted the string to Number
        //console.log(num1 === num2);  //* false: check both value and dataType


        //* Ternary operator
        let age = 32;
        let status = (age>=18)? 'You can vote':'You cant vote';
        console.log(status) // You can vote

// ----------***********----------***********----------***********----------

/*
        * falsy and truthy:
        * Falsy values are values that are considered "false" when encountered in a Boolean context. In JavaScript, the following values are considered falsy: 
                        * false 
                        * 0 (zero)
                        * -0 (negative zero) 
                        * "" (empty string) 
                        * null 
                        * undefined 
                        * NaN (Not a Number)
        
        * tuthy:
        * Truthy values are values that are considered "true" when encountered in a Boolean context. In JavaScript, all values that are not falsy are considered truthy. Some examples of truthy values: 
                    * true 
                    * Any non-zero number (positive or negative) 
                    * Any non-empty string 
                    * {} (non-empty object) 
                    * [] (non-empty array) 
                    * function() {} (any function)

*/

            if({}){
                // console.log('This is truthy')
            }

// ----------***********----------***********----------***********----------

/*
    * Bitwise AND (&) and Bitwise OR (|)
        * The computations occurs at the level of bit 
            * Eg: 2|3 => (0010) | (0011)  => (0011) Which is nothing but 3. 
            * Eg: 2&3 => (0010) & (0011)  => (0010) Which is nothing but 2. 
*/

// ----------***********----------***********----------***********----------

/*
    1. Operator precedence: No notes
    2. Control statement => if-elseif-else, switch.
                    In the switch case, break is most important 
    3. Loops: for, while and Do-while loop 
            
*/