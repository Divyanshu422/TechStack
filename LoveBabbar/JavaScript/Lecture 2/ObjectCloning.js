/*
    * Object cloning:
        *  Iteration
        *  Assign
        *  Spread
*/

//-------------------*******************---------------- 
/* 1. Iteration */
    let source = {
        a: 1,
        b: 2,
        c: 3
    }

    let destination = {};

    for (const key in source){
        destination[key] = source[key]
    };

    // console.log(destination);       // { a: 1, b: 2, c: 3 }


//-------------------*******************----------------

    //* Assign method: 
        //* Syntax: Object.assign(target, source);

    let destination2 = Object.assign({}, source);
    // console.log(destination2); // { a: 1, b: 2, c: 3 }

//-------------------*******************----------------
    /*
        * Spread Operator: The spread operator (...) in JavaScript is a powerful syntax that 
        * allows you to expand an iterable (such as an array or object) into individual 
        * elements. It provides a concise way to copy, combine, or spread elements from one 
        * iterable to another.
    */

    let destination3 = {...source};
    console.log(destination3);      // { a: 1, b: 2, c: 3 }