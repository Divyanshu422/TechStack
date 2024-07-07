/*
    * Arrays
*/

    const groceries = ['apple', 'banana'];
    groceries.push('Mango');
    // console.log(groceries);     //! [ 'apple', 'banana', 'Mango' ]

/*
    * Slice method:
    * The slice() method is used in both JavaScript arrays and strings to extract a portion 
    * of the original array or string and return it as a new array or string, without 
    * modifying the original.
    * the slice method takes 2 parameter -> start and end. end is not included in the returned
    * string or array but start is included
*/

    const array = [10, 20, 30, 40, 50, 60, 70];
    const slicedArray = array.slice(2, 5);
    console.log(slicedArray);   // [ 30, 40, 50 ]

    console.log(array.length);   // 7 
    console.log(array.indexOf(44));     // - 1 => means not present 
    console.log(array.indexOf(40));     // 3